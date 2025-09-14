import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email("Debe ser un email válido").required("El email es obligatorio"),
  telefono: Yup.string().required("El teléfono es obligatorio"),
  rol: Yup.string(),
});
