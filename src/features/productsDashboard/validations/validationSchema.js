import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es obligatorio"),
  description: Yup.string().required("La descripción es obligatoria"),
  offer: Yup.number()
    .typeError("La oferta debe ser un número")
    .min(0, "La oferta no puede ser negativa"),
  unit_price: Yup.number()
    .typeError("El precio unitario debe ser un número")
    .min(0, "El precio no puede ser negativo")
    .required("El precio unitario es obligatorio"),

  categories: Yup.array()
    .of(Yup.number().typeError("Cada categoría debe ser un número válido"))
    .min(1, "Debes seleccionar al menos una categoría")
    .required("Selecciona al menos una categoría"),

  uniqueProducts: Yup.array()
    .of(Yup.number().typeError("Cada producto único debe ser un número válido"))
    .min(1, "Debes seleccionar al menos un producto único")
    .required("Selecciona al menos un producto único"),
});
