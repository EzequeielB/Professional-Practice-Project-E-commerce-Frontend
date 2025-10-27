import {
  AuthRedirectPanel,
  Container,
  DynamicForm,
  Divider,
  Title
} from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues, validationSchema } from "./validations";
import { formElements } from "./config";
import { ROUTES } from "../../Router/routesConfig";

function Register() {
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
  };

  return (
    <Container>
      <Title title={"Registrarse"}/>
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
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
