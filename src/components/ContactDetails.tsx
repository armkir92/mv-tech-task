import { useSuspenseQuery } from '@tanstack/react-query'
import { getContacts } from '../queries/getContacts'
import { getRouteApi, Link, Outlet } from '@tanstack/react-router'
import { getContactDetails } from '../queries/getContactDetails'
import { Button } from './ui/Button'

const route = getRouteApi('/contacts/$contactId')

export function ContactDetails() {
  const { contactId } = route.useParams()
  const {
    data: { contact },
  } = useSuspenseQuery(getContactDetails(contactId))

  return (
    <div className='min-h-[calc(100vh-3rem)] h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <img src={contact.image} alt={`${contact.name}'s profile`} className='w-36 h-36 rounded-full mx-auto' />
          <h2 className='text-2xl font-semibold text-center mt-4'>{contact.name}</h2>
          <h3 className='text-lg text-gray-600 text-center'>@{contact.username}</h3>
          <p className='text-gray-700 text-center mt-2'>{contact.info}</p>
          <div className='flex justify-center mt-4 space-x-4'>
            <Link to='/contacts/edit/$contactId' params={{ contactId }}>
              <Button>Edit</Button>
            </Link>
            <Button variant='warn' onClick={() => alert('Delete functionality not implemented yet')}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
