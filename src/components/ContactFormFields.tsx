import { useForm } from '@tanstack/react-form'
import { type z } from 'zod'
import { FormField } from './ui/FormField'
import { ContactFormData } from '../schemas/contact'
import { Input } from './ui/Input'

interface ContactFormFieldsProps {
  form: ReturnType<typeof useForm<ContactFormData>>
}

export function ContactFormFields({ form }: ContactFormFieldsProps) {
  return (
    <>
      <form.Field
        name='name'
        children={(field) => (
          <FormField label='Name' htmlFor='name' error={(field.state.value && field.state.meta.errors?.[0]) || ''}>
            <Input
              name={field.name}
              id={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </FormField>
        )}
      />

      <form.Field
        name='username'
        children={(field) => (
          <FormField
            label='Username'
            htmlFor='username'
            error={(field.state.value && field.state.meta.errors?.[0]) || ''}
          >
            <Input
              name={field.name}
              id={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          </FormField>
        )}
      />

      <form.Field
        name='info'
        children={(field) => (
          <FormField
            label='Additional Information'
            htmlFor='info'
            error={(field.state.value && field.state.meta.errors?.[0]) || ''}
          >
            <textarea
              id='info'
              rows={4}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              className='w-full p-1 rounded-md border border-gray-200 shadow-sm focus:border-indigo-500'
            />
          </FormField>
        )}
      />
    </>
  )
}
