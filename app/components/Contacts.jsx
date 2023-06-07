import Link from 'next/link'
import React from 'react'

async function fetchContacts(){
    const res = await fetch('http://localhost:3000/api/contacts', { next: { revalidate: 10 } })

    // delaying the result for 1 sec
    await new Promise((resolve) => setInterval(resolve, 1000));

    const contacts = await res.json()

    return contacts
}

const Contacts = async () => {
    const contacts = await fetchContacts();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>

            {contacts.map((contact) => (
                <a href={contact.link} target='_blank' className='block border-b-4 border-blue-500 shadow cursor-pointer p-3 rounded hover:bg-slate-100 transition duration-300 ease-out hover:scale-105'>{contact.name}</a>
            ))}
  
    </div>
  )
}

export default Contacts