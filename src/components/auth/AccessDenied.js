import React from 'react'

const AccessDenied = ({ message }) => {
    return (
        <div className="mx-auto px-4 py-16 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
            <div className='max-w-4xl flex flex-col justify-center items-center gap-10'>
                {message ? message : 'Please sign in to view this page'}
            </div>
        </div>
    )
}

export default AccessDenied