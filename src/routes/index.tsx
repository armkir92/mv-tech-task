import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className='p-6'>
      <h3 className='text-2xl text-gray-700 font-bold mb-2'>Welcome Home!</h3>
      <p className='text-lg text-gray-600'>I'm glad to have you here. Enjoy your stay!</p>
    </div>
  )
}
