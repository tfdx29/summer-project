/* eslint-disable @next/next/no-img-element */
import { NavItem, SiteConfig } from '@/lib/nav'
import { LogOut, User, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import AlertDialogue from './Dialogue/Alert';

const NavBar = ({ session, signOut }) => {
    return (
        <header className="bg-white/10 shadow-sm">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12 ">
                        <Link href={'/'} className='font-bold flex gap-2 justify-center items-center'>
                            <img src="/assets/auction-yellow.svg" alt="logo" className="h-10 w-10 bg-white rounded-lg" />
                            <span>{SiteConfig.title}</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {NavItem.map((item, i) => (
                                    <li key={i}>
                                        <Link href={item.route} className="text-white transition hover:text-slate-300/75 font-bold">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {session ? (
                        <div className='flex items-center gap-4'>
                            <Link href={'/dashboard'} className='text-white transition hover:text-slate-300/75 font-bold'>
                                <User className='h-6 w-6' />
                            </Link>
                            <AlertDialogue title={'Do You Want to Logout ?'} icon={<LogOut className='h-6 w-6' />} />
                        </div>

                    ) : (
                        <div className="flex items-center gap-4">

                            <Link href={'/auth/login'}
                                className="group relative inline-block overflow-hidden border border-white px-5 py-2 focus:outline-none focus:ring cursor-pointer"
                            >
                                <span
                                    className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-white"
                                ></span>

                                <span
                                    className="relative text-sm font-medium text-white transition-colors group-hover:text-black"
                                >
                                    Login
                                </span>
                            </Link>



                            <Link href={'/auth/register'}
                                className="group relative inline-block overflow-hidden border border-white px-5 py-2 focus:outline-none focus:ring cursor-pointer"
                            >
                                <span
                                    className="absolute inset-x-0 top-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-white"
                                ></span>

                                <span
                                    className="relative text-sm font-medium text-white transition-colors group-hover:text-black"
                                >
                                    Register
                                </span>
                            </Link>

                        </div>
                    )}
                </div>
            </div>
        </header >
    )
}

export default NavBar