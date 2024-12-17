import { createFileRoute } from '@tanstack/react-router'
import { CreateContact } from '../components/CreateContact'

export const Route = createFileRoute('/contacts/create')({
  component: CreateContact,
})
