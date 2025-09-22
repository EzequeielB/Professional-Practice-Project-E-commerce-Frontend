import * as Yup from "yup";

export const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
  imagen: Yup.string().url("Debe ser una URL válida").required("La URL es obligatoria"),
});
