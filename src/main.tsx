import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from './_auth/AuthLayout.tsx';
import Signin from './_auth/forms/Signin.tsx';
import Signup from './_auth/forms/Signup.tsx';
import Home from './_root/pages/Home.tsx';
import RootLayout from './_root/RootLayout.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Signin />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/signup",
        element: <Signup />
      },
    ]
  },
  {
    path: "/home",
    element: <RootLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
