import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("El nombre del producto es obligatorio"),

  color: Yup.string()
    .trim()
    .required("El color es obligatorio"),

  id_brand: Yup.string()
    .nullable(),

  size: Yup.array()
    .of(Yup.string().trim().required("Cada talla debe ser un valor válido"))
    .min(1, "Debe seleccionar al menos una talla")
    .required("Debe seleccionar al menos una talla"),

  stock: Yup.object().shape({
    count: Yup.number()
      .typeError("El stock debe ser un número")
      .min(0, "El stock no puede ser negativo")
      .required("El stock es obligatorio"),
  }),
});
