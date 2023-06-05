import React from 'react'
import { FaSatellite, FaCodeBranch, FaEye, FaStar } from "react-icons/fa"
import { Link } from 'next/link'

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/MyronJoe/repos');

    const repos = await response.json();

    return repos
}

const ReposPage = async () => {
    const repos = await fetchRepos();


    return (
        <div className='repos w-[100%]'>

            <h1 className='font-bold mb-2 text-2xl'>Repositories</h1>

            <div className="holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {repos.map((repo) => (

                    <div key={repo.id} className=' border-b-4 border-blue-500 shadow cursor-pointer p-3 rounded hover:bg-slate-100 transition duration-300 ease-out hover:scale-105'>

                        <div className="repo">
                            <h3 href="/" className='text-lg font-semibold'>{repo.name}</h3>
                            <p className="sub-title text-sm my-3 truncate">{repo.description}</p>
                        </div>

                        <div className="icons flex justify-between items-center">

                            <span className='flex justify-center items-center text-xs'><FaStar /> {repo.stargazers_count}</span>

                            <span className='flex justify-center items-center text-xs'><FaCodeBranch /> {repo.forks_count}</span>

                            <span className='flex justify-center items-center text-xs'><FaEye /> {repo.watchers_count}</span>

                        </div>
                    </div>

                ))}
            </div>

        </div>
    );

}

export default ReposPage

