import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("El nombre de marca es obligatorio"),
  external_reference: Yup.string().required("El link de referencia es obligatorio"),
});
