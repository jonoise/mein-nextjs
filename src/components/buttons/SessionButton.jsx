import { Flex, Text } from '@chakra-ui/react'
import { signout, useSession } from 'next-auth/client'

const LogoutButton = () => {
  const [session] = useSession()
  return (
    <>
      {session ? (
        <Flex
          w="28"
          h="2rem"
          bg="#1a1a1a"
          justify="center"
          align="center"
          cursor="pointer"
          onClick={signout}
        >
          <Text fontSize="16" color="white">
            Log out
          </Text>
        </Flex>
      ) : (
        <Flex
          w="28"
          as="a"
          h="2rem"
          bg="#1a1a1a"
          justify="center"
          align="center"
          cursor="pointer"
          href={`/login`}
        >
          <Text fontSize="16" color="white">
            Login
          </Text>
        </Flex>
      )}
    </>
  )
}

export default LogoutButton
