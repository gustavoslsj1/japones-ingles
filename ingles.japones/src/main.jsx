import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import{ createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";

import Home from './routes/Home.jsx'
import Japones from './routes/Japones.jsx';
import ErrorPage from './routes/errorPage.jsx';
import Ingles from './routes/Ingles.jsx';
const router = createBrowserRouter ([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"japones",
        element:<Japones/>,
      },
      {
        path:"ingles",
        element:<Ingles/> 
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
