import prisma from "@/lib/prisma"
import { getSession } from "next-auth/react"

export default async function handler(req, res) {
    const session = await getSession({ req })
    if (!session) {
        return res.status(401).json({ message: ' You Must Be Logged In' })
    }
    const me = await prisma.user.findUnique({
        where: {
            email: session.user.email
        },
    })

    if (me.email === session.user.email) {
        return res.status(200).json({
            name: me.name,
            email: me.email,
            admin: me.admin,
            createdAt: me.createdAt,
            updatedAt: me.updatedAt,
        })
    }

    return res.status(401).json({ message: 'Forbidden Resources' })

}
