import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addtoproduct from "./components/Addtoproduct.jsx";
import Banner from "./components/Banner.jsx";
import Cards from "./components/Cards.jsx";
import Home from "./components/Home.jsx";
import My_cart from "./components/My_cart.jsx";

import Carddetails from "./components/Carddetails.jsx";
import Details from "./components/Details.jsx";
import Errorpage from "./components/Errorpage.jsx";
import Log_in from "./components/Log_in/sign_up.jsx";
import Authprovider from "./components/providers/Authprovider.jsx";
import Updattedcart from "./components/Updattedcart.jsx";
import Privateroute from "./Privateroute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/",
        element: <Cards></Cards>,
      },
      {
        path: "/cart",
        element: (
          <Privateroute>
            <My_cart></My_cart>
          </Privateroute>
        ),
        loader: () => fetch("https://car-server-site-nine.vercel.app/carts"),
      },
      {
        path: "/addproduct",
        element: (
          <Privateroute>
            <Addtoproduct></Addtoproduct>
          </Privateroute>
        ),
      },

      {
        path: "/card/:title",
        element: <Carddetails></Carddetails>,
        loader: () => fetch("https://car-server-site-nine.vercel.app/brand"),
      },
      {
        path: "/details/:_id",
        element: <Details></Details>,
        loader: () => fetch("https://car-server-site-nine.vercel.app/brand"),
      },
      {
        path: "/updattedcart/:id",
        element: (
          <Privateroute>
            <Updattedcart></Updattedcart>
          </Privateroute>
        ),
        loader: ({ params }) =>
          fetch(`https://car-server-site-nine.vercel.app/carts/${params.id}`),
      },

      {
        path: "/login",
        element: <Log_in></Log_in>,
      },
      {
        path: "/*",
        element: <Errorpage></Errorpage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      {" "}
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
