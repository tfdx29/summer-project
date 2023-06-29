import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/components/Layout'
import AuthWrapper from '@/components/auth/AuthWrapper'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </SessionProvider>
  )
}
