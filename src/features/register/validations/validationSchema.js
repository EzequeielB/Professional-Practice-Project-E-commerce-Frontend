import * as Yup from "yup";
export const validationSchema = Yup.object({
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  user_name: Yup.string().required("El nombtr de usuario es obligatorio"),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "La contraseña debe contener letras y números"
    )
    .required("La contraseña es obligatoria"),
  confirmPassword: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
      "La contraseña debe contener letras y números"
    )
    .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("La contraseña es obligatoria"),
});
