import { useSuspenseQuery } from '@tanstack/react-query'
import { getContacts } from '../queries/getContacts'
import { Link, Outlet } from '@tanstack/react-router'
import { useState } from 'react'

export function Contacts() {
  const { data: contacts } = useSuspenseQuery(getContacts)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  )

  return (
    <div className='min-h-screen flex-1 flex overflow-auto'>
      <div className='min-w-56 bg-slate-100 p-4'>
        <div className='pb-2 border-b-2 flex flex-row gap-2 items-center justify-center'>
          <input
            type='text'
            placeholder='Search contacts...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='max-w-52 p-2 border-b rounded-lg'
          />
          <button
            className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
            onClick={() => alert('Create functionality not implemented yet')}
          >
            New
          </button>
        </div>
        <div className='divide-y'>
          {filteredContacts?.map(({ id, name }) => {
            return (
              <div key={id} className=''>
                <Link
                  to='/contacts/$contactId'
                  params={{ contactId: id }}
                  className='block py-2 px-3 text-black-700 hover:bg-slate-300 rounded'
                  activeProps={{ className: 'font-bold bg-slate-300 ' }}
                >
                  {name}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex-1 border-l'>
        <Outlet />
      </div>
    </div>
  )
}
