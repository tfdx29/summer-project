/* eslint-disable @next/next/no-img-element */
import { Edit2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Card = ({
    image,
    buttonText,
    status,
    editable
}) => {
    return (
        <div className='max-w-xs border relative border-solid border-[white]'>
            {editable && (
                <span
                    className="absolute end-4 top-4 z-10 rounded-full bg-white hover:bg-black text-black p-1.5 transition hover:text-white cursor-pointer"
                >
                    <Edit2 className='h-4 w-4' />
                </span>
            )}

            <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt=""
                className="h-64 w-full object-cover transition duration-500 sm:h-72"
            />

            <div className="relative bg-white/10 p-6">
                {/* <span
                        className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
                    >
                        New
                    </span> */}

                <h3 className="mt-4 text-lg font-medium text-white">Robot Toy</h3>

                <p className="mt-1.5 text-sm text-white">$14.99</p>

                <form className="mt-4">
                    <Link href={'#'}
                        className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring active:text-white"
                    >
                        <span
                            className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-white transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className="relative block border border-current bg-white px-8 py-3 text-black font-mono">
                            {buttonText}
                        </span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Card