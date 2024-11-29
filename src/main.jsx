import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './component/AddCoffee.jsx';
import UpdateCoffee from './component/UpdateCoffee.jsx';
import MainLayout from './component/MainLayout.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import Provider from './component/Provider.jsx';
import User from './component/User.jsx';
import PrivateRoute from './component/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
    children:[
      {
        path: "/",
       element: <App></App>,
        loader:()=>fetch("http://localhost:5000/user"),
      },
      {
        path:"/addCoffee",
        element:<AddCoffee></AddCoffee>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/user",
        element:<PrivateRoute><User></User></PrivateRoute>,
        loader:()=>fetch("http://localhost:5000/users")
      }
    ]
  },
  {
    path:"/updateCoffee/:id",
    element:<UpdateCoffee></UpdateCoffee>,
    loader:({params})=>fetch(`http://localhost:5000/user/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(


  <Provider>
     <RouterProvider router={router} />
  </Provider>,
  // <StrictMode>
  //    <RouterProvider router={router} />
  // </StrictMode>,
)
