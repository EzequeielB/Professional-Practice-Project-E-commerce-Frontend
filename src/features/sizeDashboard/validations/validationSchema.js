import * as Yup from "yup";

export const validationSchema = Yup.object({
  size: Yup.string().required("El nombre es obligatorio"),
});
