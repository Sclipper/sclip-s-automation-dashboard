'use client'

import { useRouter } from 'next/navigation'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { SiMinutemailer } from 'react-icons/si'

import AutomationButton from '@/components/ui/AutomationButton'
import { Box, useColorMode } from '@chakra-ui/react'

export default function Home() {
  const { setColorMode } = useColorMode()
  setColorMode('dark')
  const router = useRouter()

  return (
    <Box
      sx={{
        display: 'inline-flex',
        pl: 10,
        gap: 5,
      }}
    >
      <AutomationButton
        onClick={() => router.push('/email_automations')}
        title="Email Automation"
        icon={MdOutlineMarkEmailRead}
      />
      <AutomationButton
        onClick={() => router.push('/bulk_emails')}
        title="Send Bulk Emails"
        icon={SiMinutemailer}
      />
    </Box>
  )
}
