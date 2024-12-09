'use client'

import React, { useState } from 'react'
import {
  Box,
  Button,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Text,
  useToast,
  SimpleGrid,
} from '@chakra-ui/react'
import { kosmoLabsApi } from '@/config'

interface Receiver {
  email: string
  [key: string]: any
}

export default function SendEmailsPage() {
  const [senderEmail, setSenderEmail] = useState('')
  const [password, setPassword] = useState('')
  const [subject, setSubject] = useState('')
  const [html, setHtml] = useState(
    '<p>Hello {{ firstName }}, welcome to {{ companyName }}!</p>'
  )
  const [receiverListJSON, setReceiverListJSON] = useState('')

  // New fields for username & password authentication
  const [username, setUsername] = useState('')
  const [authPassword, setAuthPassword] = useState('')

  const [responseData, setResponseData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async () => {
    let receiverList: Receiver[] = []
    if (receiverListJSON.trim()) {
      try {
        receiverList = JSON.parse(receiverListJSON)
        if (!Array.isArray(receiverList)) {
          throw new Error('Receiver list JSON must be an array')
        }
      } catch (err: any) {
        toast({
          title: 'Invalid JSON',
          description: err.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return
      }
    } else {
      toast({
        title: 'No receiver data',
        description: 'Please provide a receiver list in JSON format.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return
    }

    const body = {
      credentials: {
        email: senderEmail,
        password,
      },
      options: {
        subject,
        html,
      },
      receiverList,
      username,
      authPassword,
    }

    setLoading(true)
    try {
      const res = await fetch(`${kosmoLabsApi}/email/group_email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })

      const data = await res.json()
      if (!res.ok) {
        toast({
          title: 'Error sending emails',
          description: data.message || 'An error occurred.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      } else {
        toast({
          title: 'Success',
          description: 'Emails have been sent (check logs for detail).',
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
      setResponseData(data)
    } catch (error: any) {
      toast({
        title: 'Network Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box maxW="800px" mx="auto" p={4}>
      <Heading mb={6}>Send Bulk Emails</Heading>
      {/* New Username and Password Fields for Authentication */}

      <SimpleGrid columns={[1, 2]} spacing={6} mb={6}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Auth Password</FormLabel>
          <Input
            type="password"
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
            placeholder="••••••••"
          />
        </FormControl>
      </SimpleGrid>
      <SimpleGrid columns={[1, 2]} spacing={6} mb={6}>
        <FormControl>
          <FormLabel>Sender Email</FormLabel>
          <Input
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="sender@example.com"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </FormControl>
      </SimpleGrid>

      <FormControl mb={6}>
        <FormLabel>Subject</FormLabel>
        <Input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Email Subject"
        />
      </FormControl>

      <FormControl mb={6}>
        <FormLabel>HTML Template</FormLabel>
        <Textarea
          value={html}
          onChange={(e) => setHtml(e.target.value)}
          placeholder="<p>Hello {{ firstName }}, welcome to {{ companyName }}!</p>"
          rows={6}
        />
      </FormControl>

      <FormControl mb={6}>
        <FormLabel>Receiver List JSON</FormLabel>
        <Textarea
          value={receiverListJSON}
          onChange={(e) => setReceiverListJSON(e.target.value)}
          placeholder={`[\n  {\n    "email": "john@example.com",\n    "firstName": "John",\n    "companyName": "Acme Inc"\n  }\n]`}
          rows={10}
        />
      </FormControl>

      <Button colorScheme="teal" onClick={handleSubmit} isLoading={loading}>
        Send Emails
      </Button>

      {responseData && (
        <Box mt={8} p={4} borderWidth="1px" borderRadius="lg">
          <Heading size="md" mb={4}>
            Response
          </Heading>
          <Text fontFamily="monospace" fontSize="sm" whiteSpace="pre-wrap">
            {JSON.stringify(responseData, null, 2)}
          </Text>
        </Box>
      )}
    </Box>
  )
}
