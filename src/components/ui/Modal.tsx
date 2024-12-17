import { ReactNode } from 'react'
import { Button } from './Button'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  children: ReactNode
}

export function Modal({ isOpen, onClose, onConfirm, title, children }: ModalProps) {
  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded shadow-lg'>
        <h2 className='text-xl font-semibold mb-4'>{title}</h2>
        <div className='mb-4'>{children}</div>
        <div className='flex justify-end space-x-4'>
          <Button onClick={onClose} variant='secondary'>
            Cancel
          </Button>
          <Button onClick={onConfirm} variant='warn'>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}
