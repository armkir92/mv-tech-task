import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'warn'
  isLoading?: boolean
}

export function Button({ children, variant = 'primary', isLoading, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'primary' && 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
        variant === 'secondary' && 'text-indigo-600 bg-white hover:bg-gray-50 focus:ring-indigo-500',
        variant === 'warn' && 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
        isLoading && 'opacity-50 cursor-not-allowed',
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  )
}
