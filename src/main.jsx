import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./Layout";
import Holidaze from "./Pages/Portfolio/Holidaze";
import AuctionHouse from "./Pages/Portfolio/AuctionHouse";
import Nettbutikk from "./Pages/Portfolio/eShop";
import Contact from "./Pages/Contact";
import { Toaster } from "react-hot-toast";
import { ScrollProvider } from "./context/ScrollProvider";
import NotFound from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <App /> },
      { path: "home", element: <App /> },
      { path: "contact", element: <Contact /> },
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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#201309",
            color: "#fff",
            borderRadius: "12px",
            padding: "12px 16px",
          },
        }}
      />
    </ScrollProvider>
  </StrictMode>
);
