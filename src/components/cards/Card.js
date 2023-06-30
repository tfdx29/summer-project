/* eslint-disable @next/next/no-img-element */
import { Edit2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Card = ({
    name,
    price,
    image,
    buttonText,
    status,
    editable,
    auctionStart
}) => {
    const isDisabled = () => {
        return new Date(auctionStart) > new Date()
    }

    return (
        <div className='max-w-xs border relative border-solid border-[white]'>
            {editable && (
                <span className="absolute end-4 top-4 z-10 rounded-full bg-white hover:bg-black text-black p-1.5 transition hover:text-white cursor-pointer">
                    <Edit2 className='h-4 w-4' />
                </span>
            )}

            <img
                src={image}
                alt=""
                className="h-64 w-full object-cover transition duration-500 sm:h-72"
            />

            <div className="relative bg-white/10 p-6">
                {/* <span
                        className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
                    >
                        New
                    </span> */}

                <h3 className="mt-4 text-lg font-medium text-white">{name}</h3>

                <p className="mt-1.5 text-sm text-white">$ {price}</p>

                <form className="mt-4">
                    <button
                        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-white"
                        disabled={isDisabled()}
                    >
                        <span
                            className={`absolute inset-0 translate-x-0.5 translate-y-0.5 bg-white transition-transform ${isDisabled() ? '' : 'group-hover:translate-y-0 group-hover:translate-x-0'}`}
                        ></span>

                        <span className="relative block border border-current bg-white px-8 py-3 text-black font-mono">
                            {isDisabled() ? 'Starting Soon' : buttonText}
                        </span>
                    </button>
                </form>
            </div>
        </div >
    )
}

export default Card