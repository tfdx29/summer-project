import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import NextAuth from "next-auth/next"

const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: 'Credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {

                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })
                if (!user) {
                    throw new Error('No user found')
                }
                if (credentials.password !== user.password) {
                    throw new Error('Password is incorrect')
                }
                if (user && user.password === credentials.password) {
                    return user
                }

            }
        })
    ],
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/welcome' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
}

export default NextAuth(authOptions)