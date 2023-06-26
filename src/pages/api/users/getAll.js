import prisma from "@/lib/prisma"

export default async function handler(req, res) {
    const users = await prisma.user.findMany()


    if (!users || users.length === 0) {
        return res.status(404).json({ message: `No users found` })
    }
    res.status(200).json(users)
}
