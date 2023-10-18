import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Banner from './components/Banner.jsx';
import Cards from './components/Cards.jsx';
import My_cart from './components/My_cart.jsx';
import Addtoproduct from './components/Addtoproduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
    

     {
      path:'/',
      element:<Banner></Banner>
     },
     {
       path:'/',
       element:<Cards></Cards>
     },
     {
      path:'/cart',
      element:<My_cart></My_cart>
     },
     {
      path:'/addproduct',
      element:<Addtoproduct></Addtoproduct>
     }

         
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
