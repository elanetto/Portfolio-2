import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import Holidaze from "./Pages/Portfolio/Holidaze";
import AuctionHouse from "./Pages/Portfolio/AuctionHouse";
import Nettbutikk from "./Pages/Portfolio/eShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "home", element: <App /> },

      // Portfolio pages:
      {
        path: "holidaze",
        element: <Holidaze />,
      },
      {
        path: "auction",
        element: <AuctionHouse />,
      },
      {
        path: "eshop",
        element: <Nettbutikk />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
