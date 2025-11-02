import { useState } from "react";
import {
  AuthRedirectPanel,
  Container,
  DynamicForm,
  Divider,
  Title,
} from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues, validationSchema } from "./validations";
import { formElements } from "./config";
import { ROUTES } from "../../Router/routesConfig";
import { useUsers } from "../../hooks/useUsers";

function Register() {
  const [serverError, setServerError] = useState(null);

  const { register, login, error } = useUsers();

  const handleSubmit = async (RegisterPayload) => {
    console.log("Payload recibido:", RegisterPayload);
    try {
      setServerError(null);
      const { user_name, password } = RegisterPayload;
      const success = await register(RegisterPayload);
      if (success) {
        const user = await login({ user_name, password });
        if (user) {
          console.log("usuario logeado");
        } else {
          setServerError("Error al iniciar sesión");
        }
      }
    } catch {
      setServerError("Error en el Registro");
    }
  };

  return (
    <Container>
      <Title title={"Registrarse"} />
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
        text={"¿Ya tienes cuenta?"}
        linkPath={ROUTES.LOGIN}
        linkText={"Ingresá aquí"}
      />
    </Container>
  );
}

export default Register;
