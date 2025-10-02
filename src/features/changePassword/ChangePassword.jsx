import { Container, DynamicForm } from "../../shared/components";
import "@fontsource/iceberg";
import {initialValues} from "./validations/initialValues"
import {validationSchema} from "./validations/validationSchema"
import { formElements } from "./config";
import { useNavigate } from "react-router";

function ChangePassword() {
  const navigate = useNavigate()
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
    navigate("/login")
  };

  return (
    <Container>
        <h1>Cambiar contraseña</h1>
        <p>Ingrese la nueva contraseña que quiera utilizar</p>
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default ChangePassword;
