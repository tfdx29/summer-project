import prisma from "@/lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
    const { name, description, price, image, auctionStart, auctionEnd } = req.body;

    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ message: 'You must be logged in' });
    }

    const me = await prisma.user.findUnique({
        where: {
            email: session.user.email,
        },
    });

    if (!me || !me.admin) {
        return res.status(403).json({ message: 'Forbidden resources' });
    }

    const newItem = await prisma.item.create({
        data: {
            name,
            description,
            startingPrice: parseInt(price),
            finalPrice: parseInt(price),
            image,
            auctionStart: new Date(auctionStart),
            auctionEnd: new Date(auctionEnd),
            userId: me.id,
        },
    });

    return res.status(200).json({ message: 'Item created', item: newItem });
}
