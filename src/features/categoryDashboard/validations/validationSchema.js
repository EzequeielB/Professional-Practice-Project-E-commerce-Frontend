import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("El nombre de la categoría es obligatorio"),
  id_category_parent: Yup.number()
    .nullable()
    .transform((value, originalValue) =>
      originalValue === "" ? null : value
    )
    .typeError("El ID de la categoría padre debe ser un número"),
});
