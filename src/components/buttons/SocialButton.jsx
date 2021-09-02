import { HStack, Flex, Text, Box } from '@chakra-ui/react'
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillFacebook,
  AiFillTwitterCircle,
} from 'react-icons/ai'

import { signIn, useSession } from 'next-auth/client'
import Image from 'next/image'

const LoginButton = ({ provider, colorSchema, content }) => {
  const _provider = provider.toLowerCase()

  const handleLogin = () => {
    signIn(`${_provider}`)
  }
  return (
    <Flex
      w="full"
      h="3rem"
      align="center"
      cursor="pointer"
      onClick={handleLogin}
    >
      <Flex
        w="20%"
        bg="white"
        h="100%"
        justify="center"
        align="center"
        border="1px solid #0F5DF9"
        borderLeftRadius="md"
      >
        <Box fontSize="22px">{Icons[_provider]}</Box>
      </Flex>
      <Flex
        fontSize="18"
        fontWeight="bold"
        color="white"
        justify="center"
        align="center"
        w="full"
        h="full"
        bg="#0F5DF9"
        border="1px solid #0F5DF9"
        borderRightRadius="md"
      >
        <Text>
          Entra con {_provider.replace(/^\w/, (c) => c.toUpperCase())}
        </Text>
      </Flex>
    </Flex>
  )
}

export default LoginButton

const Icons = {
  github: <AiFillGithub />,
  facebook: <AiFillFacebook color="blue" />,
  twitter: <AiFillTwitterCircle />,
  google: (
    <Image src="/social_logos/google_logo.png" width="22px" height="22px" />
  ),
}
