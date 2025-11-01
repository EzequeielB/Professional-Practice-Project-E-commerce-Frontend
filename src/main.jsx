import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={Router} />
        <ToastContainer position="top-right" autoClose={3000} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
