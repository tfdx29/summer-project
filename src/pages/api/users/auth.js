import prisma from "@/lib/prisma"

export default async function handler(req, res) {
    const { name, username, email, password } = req.body

    // find if user or email already exists
    const userExists = await prisma.user.findFirst({
        where: {
            OR: [
                {
                    username
                },
                {
                    email
                }
            ]
        }
    })

    if (userExists) {
        return res.status(409).json({ message: `User already exists` })
    }



    const user = await prisma.user.create({
        data: {
            name,
            username,
            email,
            password

        }

    })
    res.status(200).json(user)


}
