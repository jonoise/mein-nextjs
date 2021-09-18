import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import '../styles/globals.css'
const MyApp = ({ Component, pageProps }) => {
  return (
    // <ReduxProvider store={store}>
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
    // </ReduxProvider>
  )
}

export default MyApp
