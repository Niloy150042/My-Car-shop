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


import Carddetails from './components/Carddetails.jsx';
import Details from './components/Details.jsx';
import Errorpage from './components/Errorpage.jsx';

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
      path:'/card/:title',
      element:<Carddetails></Carddetails>,
      loader : ()=>fetch('http://localhost:5000/brand')
     },
     {
      path:'/details/:_id',
      element:<Details></Details>,
      loader : ()=>fetch('http://localhost:5000/brand')
     },
     {
      path:'/*',
       element:<Errorpage></Errorpage>
     }


         
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
