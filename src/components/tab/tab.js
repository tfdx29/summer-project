import { Component, PlusSquare, Settings } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/router'
import { useMe } from '@/lib/me'

const tabOptions = [
    {
        name: 'Dashboard',
        icon: <Component className='h-5 w-5' />,
    },
    {
        name: 'Settings',
        icon: <Settings className='h-5 w-5' />,
        to: 'settings',

    },
    {
        name: 'New',
        icon: <PlusSquare className='h-5 w-5' />,
        to: 'new',
    },
]

const Tab = () => {
    const { pathname } = useRouter()

    const router = useRouter()

    const { data, error, loading } = useMe();

    const navigateToTab = (to) => {
        if (!to) {
            return router.push('/dashboard')
        }
        router.push(`/dashboard/${to}`);
    };

    const isDashboardTabActive = (pathname, tab) => {
        if (!tab.to) {
            return pathname === '/dashboard'
        }

        return pathname === `/dashboard/${tab.to}`
    }

    return (
        <nav aria-label="Tabs">
            <ul className="flex border-b border-gray-100">
                {tabOptions
                    // show new tab only if user is admin 
                    .filter((tab) => tab.to !== 'new' || data?.admin === true)
                    .map((tab, index) => (
                        <li key={index} className="flex-1">
                            <button className="relative block p-4 w-40 max-w-md" onClick={() => navigateToTab(tab.to)}>
                                {isDashboardTabActive(pathname, tab) && (
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"
                                    />
                                )}

                                <div className="flex items-center justify-center gap-4 ">
                                    {tab.icon}
                                    <span className="text-sm font-medium text-white hover:text-slate-300/75"> {tab.name} </span>
                                </div>
                            </button>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}

export default Tab