import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <h1>Splash</h1>,
      },
      {
        path: "/main-menu",
        element:<h1>Main Menu</h1>,
      },
      {
        path: "/create",
        element:<h1>Create New Hero</h1>,
      },
      {
        path: "/shop",
        element:<h1>Shop</h1>,
      },
      {
        path: "/map",
        element:<h1>Map</h1>,
      },
      {
        path: "/character",
        element:<h1>Character Sheet</h1>,
      },
      {
        path: "/battle",
        element:<h1>Battle</h1>,
      },

    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
