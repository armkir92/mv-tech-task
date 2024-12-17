import { queryOptions } from '@tanstack/react-query'
import { Contact } from '../types'
import { CONTACTS_API } from '../constants'

export const getContacts = queryOptions({
  queryKey: ['GET_CONTACTS'],
  queryFn: async () => {
    const contacts: Contact[] = await (await fetch(CONTACTS_API)).json()
    return contacts
  },
})
