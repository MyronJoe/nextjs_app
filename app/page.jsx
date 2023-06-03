import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex sm:justify-between sm:items-center sm:bg-slate-200 sm:p-3 sm:shadow-sm flex-col sm:flex-row'>
      <div className="menu">
        <ul className='flex justify-evenly items-center sm:w-[200px] p-3 sm:p-0 bg-slate-200'>
          <li><Link href="/" className='hover:text-yellow-500 font-semibold'>Home</Link></li>
          <li><Link href="/about" className='hover:text-yellow-500 font-semibold'>About</Link></li>
          <li><Link href="/about/team" className='hover:text-yellow-500 font-semibold'>Team</Link></li>
        </ul>
      </div>

      <div className='flex p-3 sm:p-0'>
        <input type="text" className='p-1 rounded w-[100%] border outline-none' placeholder='Search...' />

        <button className='bg-blue-600 text-white rounded px-2 ml-2 hover:bg-blue-400'>Search</button>
      </div>
    </div>
  )
}