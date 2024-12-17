import { QueryClient } from '@tanstack/react-query'
import { Link, Outlet, createRootRoute, createRootRouteWithContext, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <div className='sticky top-0 flex justify-between items-center h-12 px-4 bg-gradient-to-r from-blue-500 to-purple-600'>
        <span className='font-bold text-lg text-white'>
          <Link to='/'>Munich Ventures Technical Task</Link>
        </span>
        <button className='flex items-center gap-4 border-sky-100 border-2 rounded-lg p-1.5'>
          <Link to='/contacts' className='link text-white'>
            Contacts
          </Link>
        </button>
      </div>
      <Outlet />
      <TanStackRouterDevtools position='bottom-right' />
    </>
  )
}
