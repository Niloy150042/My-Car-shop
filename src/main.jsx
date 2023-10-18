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
import Gallery from './components/Gallery.jsx';
import Services from './components/Services.jsx';
import Card from './components/Card.jsx';
import Carddetails from './components/Carddetails.jsx';

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
     },
     {
      path:'/galery',
      element:<Gallery></Gallery>

     },

     {
      path:'/services',
      element:<Services></Services>
     },
     {
      path:'/card/:id',
      element:<Carddetails></Carddetails>
     }


         
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
