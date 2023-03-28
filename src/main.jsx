import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
//Routes
import Root from "./routes/root";
import ItemRoot from "./routes/itemroot";
import CheckOut from "./routes/checkout";
import Cart from "./routes/cart";

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
    <RouterProvider router={router} />
  </React.StrictMode>
);
