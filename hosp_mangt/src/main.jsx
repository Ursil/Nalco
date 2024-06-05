import React from 'react'
import ReactDOM from 'react-dom/client'
import  {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Diagnosis from './components/page/Diagnosis.jsx'
import MIS_Report from './components/page/MIS_Report.jsx'
import Profile from './components/page/Profile.jsx'
import Register from './components/page/Register.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element :<Diagnosis/>
      },
      {
        path: "/mis_report",
        element :<MIS_Report/>
      },
      {
        path: "/profile",
        element :<Profile/>
      },
      {
        path: "/register",
        element :<Register/>
      },
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
