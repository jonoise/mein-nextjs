import { Provider as NextAuthProvider } from 'next-auth/client'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    // <ReduxProvider store={store}>
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ChakraProvider>
    </NextAuthProvider>
    // </ReduxProvider>
  )
}

export default MyApp
