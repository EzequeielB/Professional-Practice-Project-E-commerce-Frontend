import * as Yup from "yup";

export const validationSchema = Yup.object({
  nombre: Yup.string().required("El nombre de la oferta es obligatorio"),
  porcentaje: Yup.number()
    .typeError("El porcentaje debe ser un número")
    .required("El porcentaje es obligatorio")
    .min(0, "El porcentaje mínimo es 0")
    .max(100, "El porcentaje máximo es 100"),
  fechaInicio: Yup.date().required("La fecha de inicio es obligatoria"),
  fechaFin: Yup.date()
    .required("La fecha de fin es obligatoria")
    .min(Yup.ref("fechaInicio"), "La fecha de fin debe ser igual o posterior a la fecha de inicio"),
  descripcion: Yup.string().required("La descripción es obligatoria"),
});
