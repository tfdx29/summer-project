import prisma from "@/lib/prisma";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
    const { data, session } = req.body;


    if (!session) {
        return res.status(401).json({ message: 'You must be logged in' });
    }


    const me = await prisma.user.findUnique({
        where: {
            email: session.email,
        },
    });

    if (!me || !me.admin) {
        return res.status(403).json({ message: 'Forbidden resources' });
    }

    const newItem = await prisma.item.create({
        data: {
            name: data.name,
            description: data.description,
            startingPrice: parseInt(data.price),
            finalPrice: parseInt(data.price),
            image: data.image,
            auctionStart: new Date(data.auctionStart),
            auctionEnd: new Date(data.auctionEnd),
            userId: me.id,
        },
    });

    return res.status(200).json({ message: 'Item created', item: newItem });
}
