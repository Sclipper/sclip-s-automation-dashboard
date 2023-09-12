'use client'

import { Box } from '@chakra-ui/react'
import OrderWaterForm from './components/OrderWaterForm'

function EmailAutomationPage() {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        pl: 10,
        gap: 5,
      }}
    >
      <OrderWaterForm />
    </Box>
  )
}

export default EmailAutomationPage
