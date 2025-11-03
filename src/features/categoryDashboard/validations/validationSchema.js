import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("El nombre de la categoría es obligatorio"),
  id_category_parent: Yup.number()
    .typeError("El ID de la categoría padre debe ser un número")
    .nullable(true),
});
