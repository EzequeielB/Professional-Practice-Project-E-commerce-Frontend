import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useUsers } from "../../hooks/useUsers";
import { ROUTES } from "../../Router/routesConfig";
import {
  AuthRedirectPanel, Container, DynamicForm, Divider, Title,
} from "../../shared/components";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema";
import { formElements } from "./config";

function Login() {
  const { login, error } = useUsers();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || ROUTES.HOME;

  const auth = useSelector((state) => state.auth);
  const [serverError, setServerError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      setServerError(null);
      const user = await login(values);

      if (user) {
        const roles = auth?.decode?.roles || [];
        const isAdmin = roles.includes(1);
        const redirectTo = isAdmin ? ROUTES.DASHBOARD : from;
        navigate(redirectTo, { replace: true });
      }
    } catch {
      setServerError("Error al iniciar sesión");
    }
  };

  return (
    <Container>
      <Title title={"Login"} />
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
      {(error || serverError) && <p style={{ color: "red" }}>{error || serverError}</p>}
      <Divider />
      <AuthRedirectPanel
        text={"¿Aún no tienes cuenta?"}
        linkPath={ROUTES.REGISTER}
        linkText={"Registrate aquí"}
      />
    </Container>
  );
}

export default Login;
