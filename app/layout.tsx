'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
// import Fonts from './Fonts'
import theme from '../theme'
// import Header from './components/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ height: '100vh' }}>
        <CacheProvider>
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <ChakraProvider theme={theme}>
            <>
              {/* <Header /> */}
              <Stack
                sx={{
                  margin: 3,
                }}
              >
                <Text sx={{ width: '100%' }} textAlign="center" fontSize="3xl">
                  Sclipper&apos;s automation Dashboard
                </Text>
                {/* <Fonts /> */}
                {children}
              </Stack>
            </>
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
