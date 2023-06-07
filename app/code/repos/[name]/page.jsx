import React from 'react'
import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'

const RepoPage = ({ params: { name } }) => {
    return (
        <div className=' border-b-4 border-blue-500 shadow cursor-pointer rounded'>
            <Repo name={name} />

            <RepoDirs name={name} />
        </div>
    )
}

export default RepoPage