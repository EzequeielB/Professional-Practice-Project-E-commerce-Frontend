import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
    <ToastContainer position="top-right" autoClose={3000} />
  </StrictMode>
);
