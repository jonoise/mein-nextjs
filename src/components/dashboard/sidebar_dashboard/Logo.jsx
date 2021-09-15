import { Image, Box } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = () => {
  return (
    <Box as={'a'} href="/" cursor="pointer">
      <Image src="/logoblack.svg" width="64" height="10" />
    </Box>
  )
}
