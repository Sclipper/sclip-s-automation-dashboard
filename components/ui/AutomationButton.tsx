import { Icon, Stack, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

const automationButtonStyle = {
  border: '1px solid white',
  p: 5,
  borderRadius: 5,
  width: '15rem',
  height: '10rem',
  alignItems: 'center',
  backgroundColor: 'gray.800', // Set your dark mode background color
  color: 'white', // Set your text color
  transition: 'transform 0.2s ease', // Add a transition for smooth animation

  // Hover styles
  _hover: {
    cursor: 'pointer',
    transform: 'scale(1.01)', // Enlarge the button on hover
  },

  // Active (press) styles
  _active: {
    transform: 'scale(0.95)', // Shrink the button on press
  },
}

type AutomationButtonProps = {
  onClick: () => void
  title: string
  icon: IconType
}
function AutomationButton({ onClick, title, icon }: AutomationButtonProps) {
  return (
    <Stack onClick={onClick} sx={automationButtonStyle}>
      <Text textAlign="center">{title}</Text>
      <Icon as={icon} w={100} h={100} />
    </Stack>
  )
}

export default AutomationButton
