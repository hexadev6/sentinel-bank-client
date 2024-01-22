import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router/routes.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from './components/Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
