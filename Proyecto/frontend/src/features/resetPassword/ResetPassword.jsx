import { Container, DynamicForm } from "../../shared/components";
import "@fontsource/iceberg";
import {initialValues} from "./validations/initialValues";
import {validationSchema} from "./validations/validationSchema";
import { formElements } from "./config";
import { useNavigate } from "react-router";

function ResetPassword() {
  const navigate= useNavigate()

  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
    navigate("/verefyOTP");
  };

  return (
    <Container>
        <h1>Restablecer Contraseña</h1>
        <p>Ingresá tu e-mail de registro para comenzar a cambiar tu contraseña</p>
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default ResetPassword;
