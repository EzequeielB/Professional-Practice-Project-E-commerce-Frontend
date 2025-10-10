import { ROUTES } from "../../Router/routesConfig";

export const formElements = [
  {
    type: "email",
    name: "Email",
    label: "E-Mail",
    placeholder: "Ingresa tu email",
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
