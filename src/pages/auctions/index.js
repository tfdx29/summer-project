import React, { useState } from 'react';
import Card from '@/components/cards/Card';
import { useMe } from '@/lib/me';
import { useSession } from 'next-auth/react';

const Auctions = () => {
    const { data, loading, error } = useMe();
    const { data: session } = useSession();
    const [visibleCards, setVisibleCards] = useState(10);
    const totalCards = 16;
    const cardsPerLoad = 10;

    const handleShowMore = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + cardsPerLoad);
    };

    const showMoreButton = visibleCards < totalCards ? (
        <button
            className="btn-show-more"
            onClick={handleShowMore}
        >
            Show More
        </button>
    ) : (
        <h1>
            Nothing To Show
        </h1>
    );

    return (
        <div className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-lg text-center flex items-center gap-3 justify-center">
                <h1 className="text-2xl font-bold">All Available Auctions 🎉</h1>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-5 mt-10">
                {Array(visibleCards).fill(0).map((_, i) => (
                    <Card key={i} image={''} buttonText={'Bid'} status={''} editable={
                        session && data?.admin === true
                    } />
                ))}
            </div>
            <div className="flex justify-center mt-5">
                {showMoreButton}
            </div>
        </div>
    );
};

export default Auctions;


// import React, { useState, useEffect } from 'react';
// import Card from '@/components/cards/Card';
// import { prisma } from '@/lib/prisma';

// const Auctions = () => {
//     const [cards, setCards] = useState([]);
//     const [visibleCards, setVisibleCards] = useState(12);
//     const [totalCards, setTotalCards] = useState(0);
//     const cardsPerLoad = 12;

//     useEffect(() => {
//         fetchCards();
//     }, []);

//     const fetchCards = async () => {
//         const fetchedCards = await prisma.card.findMany();
//         setCards(fetchedCards);
//         setTotalCards(fetchedCards.length);
//     };

//     const handleShowMore = () => {
//         setVisibleCards(prevVisibleCards => prevVisibleCards + cardsPerLoad);
//     };

//     const showMoreButton = visibleCards < totalCards ? (
//         <button className="btn-show-more" onClick={handleShowMore}>
//             Show More
//         </button>
//     ) : null;

//     return (
//         <div className="px-4 py-16 sm:px-6">
//             <div className="mx-auto max-w-lg text-center flex items-center gap-3 justify-center">
//                 <h1 className="text-2xl font-bold">Auctions 🎉</h1>
//             </div>
//             <div className="flex justify-center items-center flex-wrap gap-5 mt-10">
//                 {cards.slice(0, visibleCards).map(card => (
//                     <Card key={card.id} image={card.image} buttonText={'Bid'} status={card.status} />
//                 ))}
//             </div>
//             <div className="flex justify-center mt-5">{showMoreButton}</div>
//         </div>
//     );
// };

// export default Auctions;
