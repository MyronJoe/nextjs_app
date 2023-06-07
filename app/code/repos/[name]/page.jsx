import React from 'react'
import { Suspense } from 'react'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'

const RepoPage = ({ params: { name } }) => {
    return (
        <div className=' border-b-4 border-blue-500 shadow cursor-pointer rounded'>

            <Suspense fallback={<div>Loading repo...</div>}>
                <Repo name={name} />
            </Suspense>

            <Suspense fallback={<div className='p-3'>Loading directories...</div>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}

export default RepoPage