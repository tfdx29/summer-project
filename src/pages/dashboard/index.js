import React from 'react'
import { useSession } from 'next-auth/react'

const Dashboard = () => {
    const session = useSession()
    console.log("🚀 ~ file: index.js:6 ~ Dashboard ~ session:", session)

    return (
        <div><h1>
            Dashboard
        </h1>
            <p>{JSON.stringify(
                session
            )}</p>
        </div>
    )
}

export default Dashboard