import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex sm:justify-between sm:items-center sm:bg-slate-200 sm:p-3 sm:shadow-sm flex-col sm:flex-row'>
            <div className="menu">
                <ul className='flex justify-between items-center sm:w-[350px] p-3 sm:p-0 bg-slate-200'>
                    <li><Link href="/" className='links'>Home</Link></li>
                    <li><Link href="/about" className='links'>About</Link></li>
                    {/* <li><Link href="/about/team" className='links'>Team</Link></li> */}
                    <li><Link href="/code/repos" className='links'>Code</Link></li>
                    <li><Link href="/contact" className='links'>Contact</Link></li>
                </ul>
            </div>

            <div className='flex p-3 sm:p-0'>
                <input type="text" className='p-1 rounded w-[100%] border outline-none' placeholder='Search...' />

                <button className='bg-blue-600 text-white rounded px-2 ml-2 hover:bg-blue-400'>Search</button>
            </div>
        </div>
    )
}

export default Navbar