import { useSuspenseQuery } from '@tanstack/react-query'
import { getContacts } from '../queries/getContacts'
import { Link, Outlet } from '@tanstack/react-router'
import { useState } from 'react'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

export function Contacts() {
  const { data: contacts } = useSuspenseQuery(getContacts)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredContacts = (contacts || []).filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  )

  return (
    <div className='min-h-[calc(100vh-3rem)] flex-1 flex'>
      <div className='w-72 bg-slate-100'>
        <div className='p-4 border-b-2 flex flex-row gap-2 items-center justify-center'>
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder='Search contacts...'
          />
          <Link to='/contacts/create'>
            <Button className='py-1.5'>New</Button>
          </Link>
        </div>
        <div className='px-4 max-h-[calc(100vh-8rem)] divide-y overflow-y-auto'>
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
