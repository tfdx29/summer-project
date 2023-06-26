import React from 'react'
import { Toaster } from 'react-hot-toast'

const Layout = ({
    children
}) => {
    return (

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

            {children}</div>
    )
}

export default Layout