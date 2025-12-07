import * as Yup from "yup";

export const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre de la oferta es obligatorio"),
  porcentaje: Yup.number()
    .typeError("El porcentaje debe ser un número")
    .required("El porcentaje es obligatorio")
    .min(0, "El porcentaje mínimo es 0")
    .max(100, "El porcentaje máximo es 100"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
});
