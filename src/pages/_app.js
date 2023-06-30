import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import Layout from '@/components/Layout'
import AuthWrapper from '@/components/auth/AuthWrapper'

export default function App({ Component, pageProps: { session, pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthWrapper>
    </SessionProvider>
  )
}
