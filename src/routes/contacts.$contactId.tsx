import { useQuery } from '@tanstack/react-query'
import {
  createFileRoute,
  Link,
  Outlet,
  useLoaderData,
} from '@tanstack/react-router'
import { getContactDetails } from '../queries/getContactDetails'
import { ContactDetails } from '../components/ContactDetails'

export const Route = createFileRoute('/contacts/$contactId')({
  loader: async ({ context: { queryClient }, params }) => {
    return queryClient.ensureQueryData(getContactDetails(params.contactId))
  },
  component: ContactDetails,
})
