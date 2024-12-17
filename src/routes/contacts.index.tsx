import { createFileRoute, ContextAsyncReturnType } from '@tanstack/react-router'
import { getContacts } from '../queries/getContacts'
import { QueryClient } from '@tanstack/react-query'

export interface ContextQueryClient {
  context: {
    queryClient: QueryClient
  }
}

export const Route = createFileRoute('/contacts/')({
  component: ContactsIndexComponent,
})

function ContactsIndexComponent() {
  return (
    <div>
      <h3 className='p-3 text-gray-800 text-lg'>No contacts selected</h3>
    </div>
  )
}
