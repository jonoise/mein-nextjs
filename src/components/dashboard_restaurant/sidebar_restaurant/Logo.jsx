import { Image, Flex } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'

const FramerFlex = motion(Flex)

export const Logo = () => {
  return (
    <Flex
      as={'a'}
      href="/dashboard"
      cursor="pointer"
      align="center"
      justify="center"
    >
      <FramerFlex
        animate={{ x: [5, 0, 5] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <ChevronLeftIcon fontSize="30px" />
      </FramerFlex>
      <Image src="/logoblack.svg" width="64" height="10" />
    </Flex>
  )
}
