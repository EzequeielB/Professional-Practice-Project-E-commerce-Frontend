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
<<<<<<< HEAD
        <h1>Iniciar Sesion</h1>
=======
      <Title title={"Login"} />
>>>>>>> 636009ac9b488bac976e0f9e61f9b2fc30da6bf7
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
<<<<<<< HEAD
      <Divider/>
      <div className={styles.SideRegister}>
      <h2>¿Aun no tienes cuenta?</h2>
      <a href="/register">Registrate aquí</a>
      </div>
=======
      <Divider />
      <AuthRedirectPanel
        text={"¿Aún no tienes cuenta?"}
        linkPath={ROUTES.REGISTER}
        linkText={"Registrate aquí"}
      />
>>>>>>> 636009ac9b488bac976e0f9e61f9b2fc30da6bf7
    </Container>
  );
}

export default Login;
