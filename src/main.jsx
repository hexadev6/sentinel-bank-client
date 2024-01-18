import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router/routes.jsx'
import { ThemeProvider } from '@material-tailwind/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <div className='max-w-7xl mx-auto'>
      <RouterProvider router={routes}/>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
)
