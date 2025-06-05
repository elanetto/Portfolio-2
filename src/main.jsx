import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import Holidaze from "./Pages/Portfolio/Holidaze";
import AuctionHouse from "./Pages/Portfolio/AuctionHouse";

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
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
