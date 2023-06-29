import React from 'react'
import { useSession } from 'next-auth/react'

const Welcome = () => {
    const session = useSession()

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center flex items-center gap-3 justify-center">
                <h1 className="text-2xl font-bold">Welcome 🎉</h1>
            </div>
        </div>
    )
}

export default Welcome