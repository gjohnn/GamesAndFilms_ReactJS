import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
//Routes
import Root from "./routes/root";
import ItemRoot from "./routes/itemroot";
import CheckOut from "./routes/checkout";
import Cart from "./routes/cart";

import { initializeApp } from "firebase/app";
import { CartContextProvider } from "./context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyDeaRLHKUack2syecPlFZpYs9P27RlBLjg",
  authDomain: "ecommercereactjsjohn.firebaseapp.com",
  projectId: "ecommercereactjsjohn",
  storageBucket: "ecommercereactjsjohn.appspot.com",
  messagingSenderId: "711053953716",
  appId: "1:711053953716:web:d06ce4fb9fa0615740a5e1"
};

const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id/",
    element: <Root />,
  },
  {
    path: "/item/:category/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/checkout",
    element: <CheckOut/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);
