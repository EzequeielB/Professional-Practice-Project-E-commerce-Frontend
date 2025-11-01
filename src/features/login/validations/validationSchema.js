import * as Yup from "yup";
export const validationSchema = Yup.object({
  user_name: Yup.string().required("El email es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "La contraseña debe contener letras y números"
    )
    .required("La contraseña es obligatoria"),
});
