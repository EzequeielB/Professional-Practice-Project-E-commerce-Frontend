import { Container, DynamicForm } from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues, validationSchema } from "./validations";
import { formElements } from "./config";
import styles from "./registerStyle.module.css";

function Register() {
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
  };

  return (
    <Container>
      <div className={styles.formsTitle}>
        <h1>Registrarse | </h1>
        <h2>¿Ya tienes cuenta?</h2>
        <a href="/login">Ingresá aquí</a>
      </div>
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Register;
