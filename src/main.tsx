import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ErrorPage from './pages/ErrorPage'
import RootLayout from './pages/RootLayout'

import PlanetPage from './pages/PlanetPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PlanetPage />,
      },
      {
        path: ':planet',
        element: <PlanetPage />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

