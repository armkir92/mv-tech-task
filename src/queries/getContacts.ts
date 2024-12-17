import { queryOptions } from '@tanstack/react-query'
import axios from 'axios'
import { Contact } from '../types'
import { CONTACTS_API } from '../constants'

export const getContacts = queryOptions({
  queryKey: ['GET_CONTACTS'],
  queryFn: async () => {
    const contacts: Contact[] = (await axios.get(CONTACTS_API)).data
    return contacts
  },
})
