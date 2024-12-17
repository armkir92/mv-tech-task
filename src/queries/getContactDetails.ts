import { queryOptions } from '@tanstack/react-query'
import axios from 'axios'
import { Contact } from '../types'
import { CONTACTS_API } from '../constants'

export const getContactDetails = (contactId: string) =>
  queryOptions({
    queryKey: ['GET_CONTACT', { contactId }],
    queryFn: async () => {
      const contact: Contact = (await axios.get(`${CONTACTS_API}/${contactId}`)).data

      return { contact }
    },
  })
