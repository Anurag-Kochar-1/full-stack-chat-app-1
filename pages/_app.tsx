import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Login from '../components/Login/Login'

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />

  return <Login />
}

export default MyApp
