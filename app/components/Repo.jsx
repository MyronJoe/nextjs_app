import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa"
import { Link } from 'next/link'

//fetching the details of a particular repository
async function fetchRepo(name) {
    const res = await fetch(`https://api.github.com/repos/MyronJoe/${name}`);

    const repo = await res.json();

    return repo;
}

const Repo = async ({ name }) => {

    const repo = await fetchRepo(name);

    return (
        <div key={repo.id} className='p-3 border-b'>

            <a href="/code/repos" className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-400">
                Back To Repositories
            </a>


            <div className="repo mt-4">
                <h3 className='text-lg font-semibold hover:text-blue-500'>{repo.name}</h3>
                <p className="sub-title text-sm my-3 truncate">{repo.description}</p>
            </div>

            <div className="flex justify-between items-center">

                <span className='icons'><FaStar /> {repo.stargazers_count}</span>

                <span className='icons' text-gray-400><FaCodeBranch /> {repo.forks_count}</span>

                <span className='icons'><FaEye /> {repo.watchers_count}</span>

            </div>
        </div>
    )
}

export default Repo