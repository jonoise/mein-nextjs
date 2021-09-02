import { Divider, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { getSession } from 'next-auth/client'
import LoginButton from '../components/buttons/SocialButton'
import DefaultHead from '../components/head/DefaultHead'
import LoginForm from '../components/login/LoginForm'
import Navbar from '../components/navbar/Navbar'
import { containerSection } from '../constants'

const login = () => {
  return (
    <>
      <DefaultHead title="Login">
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </DefaultHead>
      <Navbar />
      <Stack {...containerSection}>
        <Stack
          w={{ base: '100%', md: '60%', lg: '80%', '2xl': '40%' }}
          justify="center"
          align="center"
        >
          <Heading>Bienvenid@! </Heading>
          <Text>Inicia sesión con tu cuenta de Google</Text>
          <LoginButton provider="Google" />
          <Stack w="full">
            <LoginForm />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default login

export const getServerSideProps = async (context) => {
  const { req, res } = context
  const session = await getSession({ req })

  if (session) {
    res.writeHead(302, { Location: `/?message=userisauth` })
    res.end()
  }

  return {
    props: {},
  }
}
