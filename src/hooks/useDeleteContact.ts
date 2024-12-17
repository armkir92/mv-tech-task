import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { CONTACTS_API } from '../constants'

export function useDeleteContact(id: string) {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const res = await axios.delete(`${CONTACTS_API}/${id}`)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['GET_CONTACTS'] })
      navigate({ to: `/contacts` })
    },
  })
}
