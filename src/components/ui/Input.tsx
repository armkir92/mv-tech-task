interface InputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
  id?: string
  name?: string
  placeholder?: string
}

export function Input({ value, onBlur, onChange, id, name, placeholder }: InputProps) {
  return (
    <input
      type='text'
      id={id}
      name={name}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      className='w-full py-1 px-2 rounded-md border border-gray-200 shadow-sm'
      placeholder={placeholder}
    />
  )
}
