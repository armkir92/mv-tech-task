import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { ContactFormData } from '../types'
import { CONTACTS_API } from '../constants'
import { createPlaceholderImage } from '../utils/placeholderImage'

export function useCreateContact() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      const res = await axios.post(CONTACTS_API, { ...data, image: createPlaceholderImage(data.username) })
      return res.data
    },
    onSuccess: ({ id }) => {
      queryClient.invalidateQueries({ queryKey: ['GET_CONTACTS'] })
      navigate({ to: `/contacts/${id}` })
    },
  })
}
