import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { Router } from "./Router";

/** ANOTACIONES
 *
 * No es necesarios que todo este en un formulario, solo donde debes validar datos
 *
 * Cuidado con el uso del fragment (<> </>) usarlo solo si es necesario, mantener el codigo limpio
 */

// TODO Cambiar los "FormButton" por el componente "Button" donde no se usen en formularios

// TODO instalar react-toastify para las notificaciones emergentes: https://www.npmjs.com/package/react-toastify
/** // TODO borrar todo lo relacionado con usePopUp y componentes de popup cuando instales react-toastify. Pero si pensas
 * que te puede servir el componente para otra funcionalidad dejalo
 */

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
