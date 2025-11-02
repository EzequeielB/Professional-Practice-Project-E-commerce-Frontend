import { useState } from "react";
import {
  AuthRedirectPanel,
  Container,
  DynamicForm,
  Divider,
  Title,
} from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema";
import { formElements } from "./config";
import { ROUTES } from "../../Router/routesConfig";
import { useUsers } from "../../hooks/useUsers";
import { Link, useNavigate, useLocation } from "react-router";

function Login() {
  const { login, error } = useUsers();

  const navigate = useNavigate();
  const location = useLocation();
  const from= location.state?.from?.pathname || "/";


  const [serverError, setServerError] = useState(null);

  const handleSubmit = async (values) => {
    try {
      setServerError(null);
      const user = await login(values);
      if (user) {
        navigate(from, {replace:true});
      }
    } catch { 
      setServerError("Error al iniciar sesion");
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
      {(error || serverError) && (
        <p style={{ color: "red" }}>{error || serverError}</p>
      )}
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
