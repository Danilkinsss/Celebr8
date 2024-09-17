import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Root from './routes/root'
import ErrorPage from './routes/Error'

import './index.css'

import Login from './routes/LoggingIn.tsx'
import Actions from './routes/Actions.tsx'
import Create from './routes/Creating.tsx'
import Join from './routes/Joining.tsx'
import Party from './routes/Party.tsx'
import { UserContextProvider } from './lib/userContext.tsx'

/**
 *
 * Creating.tsx -> refactor texts(font, bold when data in there etc.)
 * add alert when party changes are saved
 * refactor table -> AddItem.tsx
 * party page refactoring
 *
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [],
  },
  {
    path: '/actions',
    element: <Actions />,
  },
  {
    path: '/create/:partyid',
    element: <Create />,
  },
  {
    path: '/join',
    element: <Join />,
  },

  {
    path: '/party/:partyid',
    element: <Party />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
)
