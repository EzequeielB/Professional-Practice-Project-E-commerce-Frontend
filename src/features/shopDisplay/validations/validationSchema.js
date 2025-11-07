import * as Yup from "yup";

export const validationSchema = Yup.object({
  cantidad: Yup.number()
    .required("La cantidad es obligatoria")
    .min(1, "Debe ser al menos 1")
    .max(10, "No puede ser mayor que 10"),
    
  talle: Yup.string()
    .required("Seleccioná un talle")
});
