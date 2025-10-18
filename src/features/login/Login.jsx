import {
  AuthRedirectPanel,
  Container,
  DynamicForm,
  Divider,
  Title,
} from "../../shared/components";
import "@fontsource/iceberg";
import {initialValues} from "./validations/initialValues";
import {validationSchema} from "./validations/validationSchema";
import { formElements } from "./config";
import { ROUTES } from "../../Router/routesConfig";

function Login() {
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
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
