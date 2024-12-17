import { queryOptions } from '@tanstack/react-query'
import { Contact } from '../types'
import { CONTACTS_API } from '../constants'

export const getContactDetails = (contactId: string) =>
  queryOptions({
    queryKey: ['GET_CONTACT', { contactId }],
    queryFn: async () => {
      const contact: Contact = await (await fetch(`${CONTACTS_API}/${contactId}`)).json()

      return { contact }
    },
  })
