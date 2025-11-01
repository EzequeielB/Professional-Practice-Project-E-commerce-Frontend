import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </Provider>
  </StrictMode>
);
