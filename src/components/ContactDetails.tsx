import { useSuspenseQuery } from '@tanstack/react-query'
import { getContacts } from '../queries/getContacts'
import { getRouteApi, Link, Outlet } from '@tanstack/react-router'
import { getContactDetails } from '../queries/getContactDetails'

const route = getRouteApi('/contacts/$contactId')

export function ContactDetails() {
  const { contactId } = route.useParams()
  const {
    data: { contact },
  } = useSuspenseQuery(getContactDetails(contactId))

  return (
    <div className='p-6 bg-white rounded-lg '>
      <img
        src={contact.image}
        alt={`${contact.name}'s profile`}
        className='w-36 h-36 rounded-full mx-auto'
      />
      <h2 className='text-2xl font-semibold text-center mt-4'>{contact.name}</h2>
      <h3 className='text-lg text-gray-600 text-center'>@{contact.username}</h3>
      <p className='text-gray-700 text-center mt-2'>{contact.info}</p>
      <div className='flex justify-center mt-4 space-x-4'>
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
          onClick={() => alert('Edit functionality not implemented yet')}
        >
          Edit
        </button>
        <button
          className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'
          onClick={() => alert('Delete functionality not implemented yet')}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
