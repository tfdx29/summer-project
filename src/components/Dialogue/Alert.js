import React from 'react'
import { User2, X } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog';
import { signOut } from 'next-auth/react';

const AlertDialogue = ({
    icon,
    title,
}) => {
    return (
        <Dialog.Root>
            <Dialog.Trigger className='h-6 w-6'>
                {icon}
            </Dialog.Trigger>
            <Dialog.Overlay className='fixed inset-0 bg-black/80' />
            <Dialog.Portal>
                <Dialog.Content className='fixed left-1/2 w-full max-w-lg top-1/2 bg-white text-black p-8 shadow-sm rounded-md -translate-x-1/2 -translate-y-1/2'>
                    <Dialog.Title className='flex justify-between items-center'>
                        <h2 className='text-xl'>
                            {title}
                        </h2>
                        <Dialog.Close>
                            <X className='h-6 w-6 hover:text-black text-black/60' />
                        </Dialog.Close>
                    </Dialog.Title>
                    <Dialog.Description className='flex justify-between items-center mt-10'>
                        <button
                            button onClick={() => signOut({
                                callbackUrl: `${window.location.origin}/auth/login`
                            })}
                            className="group relative inline-block focus:outline-none focus:ring"

                        >
                            <span
                                className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black transition-transform group-hover:translate-y-0 group-hover:translate-x-0"
                            ></span>

                            <span
                                className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white/100 group-active:text-opacity-75"
                            >
                                Yes
                            </span>
                        </button>
                        <Dialog.Close className="group relative inline-block focus:outline-none focus:ring">
                            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-red-500 transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5"></span>
                            <span className="relative inline-block border-2 text-white border-current px-8 py-3 text-sm font-bold uppercase tracking-widest">
                                Cancel
                            </span>
                        </Dialog.Close>
                    </Dialog.Description>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default AlertDialogue