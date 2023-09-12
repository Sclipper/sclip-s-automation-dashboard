'use client'

import { Box, useColorMode } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import AutomationButton from '@/components/ui/AutomationButton'

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
    </Box>
  )
}
