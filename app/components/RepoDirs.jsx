import { Content } from 'next/font/google';
import React from 'react'
import { resolve } from 'styled-jsx/css'

//this api fetches the content(files) of the repository
async function getDirs(name) {

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch(`https://api.github.com/repos/MyronJoe/${name}/contents`, { next: { revalidate: 30 } })

    const dirs = await res.json()

    return dirs

}

const RepoDirs = async ({ name }) => {
    const contents = await getDirs(name)

    const dirs = contents.filter((content) => content.type === 'dir')


    return (
        <div className='p-3'>
            <h3 className='font-bold mb-2'>Directories:</h3>

            <ul>
                {dirs.map((dir) => (
                    <li key={dir.path}>
                        <a href={`/code/repos/${name}/${dir.path}`}>{dir.path}</a>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default RepoDirs