'use client'

import { FormControl, FormLabel } from '@chakra-ui/react'

const automationContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid white',
  p: 5,
  borderRadius: 5,
  width: '15rem',
  minHeight: '10rem',
  alignItems: 'center',
  backgroundColor: 'gray.800',
  color: 'white',
  transition: 'transform 0.2s ease',

  // Hover styles
}

type AutomationButtonProps = {
  title: string
  content: React.ReactNode
}
function AutomationContainer({ title, content }: AutomationButtonProps) {
  return (
    <FormControl sx={automationContainerStyle}>
      <FormLabel fontSize="xl" textAlign="center">
        {title}
      </FormLabel>
      {content}
    </FormControl>
  )
}

export default AutomationContainer
