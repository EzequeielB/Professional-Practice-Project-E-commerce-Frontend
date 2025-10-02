import * as Yup from "yup";

export const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre es obligatorio"),
});
