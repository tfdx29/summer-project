import React from 'react'
import { useSession } from 'next-auth/react'

const Welcome = () => {
    const session = useSession()

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Welcome 🎉</h1>
            </div>
        </div>
    )
}

export default Welcome