import { useForm } from '@tanstack/react-form'
import { Link } from '@tanstack/react-router'
import { ContactFormFields } from './ContactFormFields'
import { useCreateContact } from '../hooks/useCreateContact'
import { contactSchema, type ContactFormData } from '../schemas/contact'
import { Button } from './ui/Button'

export function CreateContact() {
  const mutation = useCreateContact()

  const form = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      username: '',
      info: '',
    } as ContactFormData,
    onSubmit: async ({ value }) => {
      await mutation.mutateAsync(value)
    },
    validators: {
      onChange: contactSchema,
    },
  })

  return (
    <div className='min-h-[calc(100vh-3rem)] h-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <h2 className='mb-8 text-2xl font-bold text-gray-900'>Create New Contact</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }}
            className='space-y-6'
          >
            <ContactFormFields form={form} />

            <Button type='submit' isLoading={mutation.isPending} className='w-full'>
              {mutation.isPending ? 'Saving...' : 'Save Contact'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
