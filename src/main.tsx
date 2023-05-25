import React from 'react'
import ReactDOM from 'react-dom/client'
import routes from './routes'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import { FoodCartProvider } from './context/FoodContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FoodCartProvider>
      <RouterProvider router={routes}/>
    </FoodCartProvider>
  </React.StrictMode>,
)
