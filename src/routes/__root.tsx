import { QueryClient } from '@tanstack/react-query'
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className='sticky top-0 flex justify-start gap-4 items-center h-12 px-4 bg-gradient-to-r from-blue-500 to-purple-600'>
        <span className='font-bold text-lg text-white'>
          <Link to='/'>Munich Ventures Technical Task</Link>
        </span>
        <Link
          to='/contacts'
          className='text-white border-sky-100 border-2 rounded-lg p-1.5 hover:bg-sky-100/10'
          activeProps={{ className: 'bg-sky-100/10' }}
        >
          <button className='flex items-center '>Contacts</button>
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  )
}
