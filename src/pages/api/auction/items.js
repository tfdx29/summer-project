import prisma from "@/lib/prisma"

export default async function handler(req, res) {
    const items = await prisma.item.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
            auctionEnd: {
                gt: new Date()
            }
        }
    })


    if (!items || items.length === 0) {
        return res.status(404).json({ message: `No items found` })
    }
    res.status(200).json(items)
}
