import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { ContactFormData } from '../types'
import { CONTACTS_API } from '../constants'

export function useEditContact(id: string) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await axios.put(`${CONTACTS_API}/${id}`, data)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_CONTACTS'] })
      navigate({ to: `/contacts/${id}` })
    },
  })
}
