import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .required("El nombre del producto es obligatorio"),

  offer: Yup.number()
    .typeError("La oferta debe ser un número")
    .min(0, "La oferta no puede ser negativa")
    .required("La oferta es obligatoria"),

  unit_price: Yup.number()
    .typeError("El precio unitario debe ser un número")
    .min(0, "El precio no puede ser negativo")
    .required("El precio unitario es obligatorio"),

  color: Yup.string()
    .trim()
    .required("El color es obligatorio"),

  id_brand: Yup.string()
    .nullable(),

  size: Yup.array()
    .of(Yup.string().required())
    .min(1, "Debe seleccionar al menos una talla"),

  stock: Yup.object().shape({
    count: Yup.number()
      .typeError("El stock debe ser un número")
      .min(0, "El stock no puede ser negativo")
      .required("El stock es obligatorio"),
  }),
});
