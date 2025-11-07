import { ROUTES } from "../../Router/routesConfig";

export const formElements = [
  {
    type: "text",
    name: "user_name",
    label: "Nombre de usuario",
    placeholder: "Ingresa tu nombre de usuario",
  },
  {
    type: "password",
    name: "password",
    label: "Contraseña",
    placeholder: "Ingresa tu contraseña",
    showForgotPassword: true,
    forgotPasswordLink: ROUTES.RESET_PASSWORD,
  },

  { type: "button", name: "Ingresar", label: "Ingresar", submit: true },
];
