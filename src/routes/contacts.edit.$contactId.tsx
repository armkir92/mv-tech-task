import { createFileRoute } from '@tanstack/react-router'
import { EditContact } from '../components/EditContact'

export const Route = createFileRoute('/contacts/edit/$contactId')({
  component: EditContact,
})
