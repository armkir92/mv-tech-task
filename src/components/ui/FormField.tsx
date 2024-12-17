import { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  error?: string
  children: ReactNode
  htmlFor: string
}

export function FormField({ label, error, children, htmlFor }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={htmlFor} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='mt-1'>{children}</div>
      {error && <p className='mt-2 text-xs text-red-600'>{error}</p>}
    </div>
  )
}
