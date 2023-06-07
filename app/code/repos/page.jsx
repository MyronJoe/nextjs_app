import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa"
import { Link } from 'next/link'
import { resolve } from 'styled-jsx/css';

// function to fetch API
async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/MyronJoe/repos', { next: { revalidate: 10 } });

    // delaying the result for 1 sec
    await new Promise((resolve) => setInterval(resolve, 1000));

    const repos = await response.json();

    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();


    return (
        <div className='repos w-[100%]'>

            <h1 className='font-bold mb-2 text-2xl'>Repositories</h1>

            <div className="holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* maps the repos data to diplay it in the interface */}
                {repos.map((repo) => (

                    <div key={repo.id} className=' border-b-4 border-blue-500 shadow cursor-pointer p-3 rounded hover:bg-slate-100 transition duration-300 ease-out hover:scale-105'>

                        <div className="repo">
                            <a href={`/code/repos/${repo.name}`} className='text-lg font-semibold hover:text-blue-500'>{repo.name}</a>
                            <p className="sub-title text-sm my-3 truncate">{repo.description}</p>
                        </div>

                        <div className="flex justify-between items-center">

                            <span className='icons'><FaStar /> {repo.stargazers_count}</span>

                            <span className='icons' text-gray-400><FaCodeBranch /> {repo.forks_count}</span>

                            <span className='icons'><FaEye /> {repo.watchers_count}</span>

                        </div>
                    </div>

                ))}
            </div>

        </div>
    );

}

export default ReposPage

