import { ROUTES } from "../../../Router/routesConfig";
import { BUTTON_TYPES } from "../../constants";

export const ACTION_TYPES = {
  LINK_BUTTON: BUTTON_TYPES.LINK_BUTTON,
};

export const navbarActions = [
  {
    type: ACTION_TYPES.LINK_BUTTON,
    label: "Iniciar Sesión",
    path: ROUTES.LOGIN,
  },
  {
    type: ACTION_TYPES.LINK_BUTTON,
    label: "Registrarse",
    path: ROUTES.REGISTER,
  },
];
