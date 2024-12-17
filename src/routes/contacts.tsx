import { createFileRoute } from '@tanstack/react-router'
import { QueryClient } from '@tanstack/react-query'
import { getContacts } from '../queries/getContacts'
import { Contacts } from '../components/Contacts'

export interface ContextQueryClient {
  context: {
    queryClient: QueryClient
  }
}

export const Route = createFileRoute('/contacts')({
  loader: async ({ context }: ContextQueryClient) => {
    return context.queryClient.ensureQueryData(getContacts)
  },
  component: Contacts,
})
