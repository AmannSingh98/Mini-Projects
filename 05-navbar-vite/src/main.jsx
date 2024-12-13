import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import { Home, About, Contact } from './component'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: '/home',
        element: <Home />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <div>404 Not Found</div>,
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <div>404 Not Found</div>,
      },
    ],
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
