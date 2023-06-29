import React from 'react'
import { Toaster } from 'react-hot-toast'
import NavBar from './NavBar'
import Head from 'next/head'
import { useSession, signOut } from 'next-auth/react'

const Layout = ({
    children
}) => {
    const { data: session } = useSession()
    return (
        <>

            <Head>
                <title>Auction Hub</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                    gutter={8}
                    containerClassName=""
                    containerStyle={{}}
                    toastOptions={{
                        duration: 5000,
                    }}
                />
                <NavBar session={session} signOut={signOut} />
                {children}
            </div>
        </>
    )
}

export default Layout