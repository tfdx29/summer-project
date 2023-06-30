import React from 'react'
import { useSession } from 'next-auth/react'
import { useMe } from '@/lib/me';
import Tab from '@/components/tab/tab';
import AccessDenied from '@/components/auth/AccessDenied';
import FormFiller from '@/components/forms/Form';

const New = () => {
    const { data, error, loading } = useMe();

    const { data: session } = useSession();

    if (!session) {
        return <AccessDenied />
    }


    return (
        <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <div className='max-w-4xl flex flex-col justify-center items-center gap-10'>
                <Tab />
                {data?.admin === true ? (
                    <div>
                        <FormFiller data={data} />
                    </div>
                ) : <p>You Are Not Authorized </p>}
            </div>
        </div>
    )
}

export default New