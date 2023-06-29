import React from 'react'
import { useSession } from "next-auth/react";


const AuthWrapper = ({ children }) => {
    const { status } = useSession();
    if (status === 'loading') return null
    return (
        <>
            {children}
        </>
    )
}

export default AuthWrapper