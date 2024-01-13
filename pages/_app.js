import Layout from '../components/Layout'
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
<Layout>
  <SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
  </SessionProvider>
</Layout>
  ) 
}

export default MyApp
