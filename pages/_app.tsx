import '../styles/globals.css'
import { ChakraProvider , Spinner,  Center } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Login from '../components/Login/Login'
import Sidebar from '../components/Sidebar/Sidebar'

import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebaseconfig"

function MyApp({ Component, pageProps }: AppProps) {

  const [user, loading, error] = useAuthState(auth)  
  if(loading) {
    return (
      <ChakraProvider>
        <Center h={"100vh"}>
          <Spinner size={"lg"} />
        </Center>
      </ChakraProvider>
      )
  }

  if(!user) {
    return (
      <ChakraProvider>
        <Login />
      </ChakraProvider>
    )
  }

  return (
        <ChakraProvider>
          {/* <Login /> */}
          {/* <Sidebar /> */}
          <Component {...pageProps} />
        </ChakraProvider>
  )
}

export default MyApp
