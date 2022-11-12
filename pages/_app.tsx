import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'

import type { AppProps } from 'next/app'
import Login from '../components/Login/Login'
import Sidebar from '../components/Sidebar/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  return (
        <ChakraProvider>
          {/* <Login /> */}
          {/* <Sidebar /> */}
          <Component {...pageProps} />
        </ChakraProvider>
  )
}

export default MyApp
