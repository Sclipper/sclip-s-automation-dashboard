'use client'

import * as React from 'react'

import AutomationContainer from '@/components/ui/AutomationContainer'
import {
  Button,
  FormHelperText,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  useToast,
} from '@chakra-ui/react'
import orderWater from '@/http/automation_service/orderWater'

function OrderWaterForm() {
  const toast = useToast()
  const [gallons, setGallons] = React.useState(5)

  const handleSendRequest = async () => {
    try {
      await orderWater(gallons)
      toast({
        title: 'Email Sent',
        status: 'success',
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Email Failed to Send',
        status: 'error',
        isClosable: true,
      })
    }
    //   // TODO: Show success message
  }

  return (
    <AutomationContainer
      title="Order water"
      content={
        <Stack spacing={3}>
          <FormHelperText>Amount of gallons</FormHelperText>
          <NumberInput
            value={gallons}
            onChange={(_, value) => setGallons(value)}
            placeholder="Amount of gallons"
            size="md"
            min={5}
            max={15}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <Button onClick={handleSendRequest} type="submit">
            Send request
          </Button>
        </Stack>
      }
    />
  )
}

export default OrderWaterForm
