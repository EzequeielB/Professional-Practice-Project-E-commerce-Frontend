import { Container, DynamicForm } from "../../shared/components";
import "@fontsource/iceberg";
import {initialValues} from "./validations/initialValues";
import {validationSchema} from "./validations/validationSchema";
import { formElements } from "./config";
import styles from "./login.module.css";
import Divider from "../../shared/components/ContainerAndDivider/Divider";

function Login() {
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
  };

  return (
    <Container>
        <h1>Iniciar Sesion</h1>
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
      <Divider/>
      <div className={styles.SideRegister}>
      <h2>¿Aun no tienes cuenta?</h2>
      <a href="/register">Registrate aquí</a>
      </div>
    </Container>
  );
}

export default Login;
