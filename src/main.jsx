import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './router/routes.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from './components/Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD

    <AuthProvider>

      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
  
    </AuthProvider>
=======
   <AuthProvider>
    
   <ThemeProvider>
     
     <RouterProvider router={routes} />
     
     </ThemeProvider>
   </AuthProvider>
>>>>>>> 1ce6f5d1bf3de529d8d121bd38cc8c48dd52a76e
  </React.StrictMode>,
)
