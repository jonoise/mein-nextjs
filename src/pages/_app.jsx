import { Provider as ReduxProvider } from 'react-redux'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { store } from '../app/store'
import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'

const MyApp = ({ Component, pageProps }) => {
  return (
    // <ReduxProvider store={store}>
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider>
        <CSSReset />
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </NextAuthProvider>
    // </ReduxProvider>
  )
}

export default MyApp
