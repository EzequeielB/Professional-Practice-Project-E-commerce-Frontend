import { Container, DynamicForm } from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues } from "./validations/initialValues";
import {validationSchema} from "./validations/validationSchema"
import { formElements } from "./config";
import { useNavigate } from "react-router";
import { ROUTES } from "../../Router/routesConfig";

function VerefyOTP() {
  const navigate = useNavigate()
  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
    navigate(ROUTES.CHANGE_PASSWORD)
  };

  return (
    <Container>
        <h1>Verificacion</h1>
        <p>Ingresá el codigo que recibio a su email para cambiar su contraseña</p>
      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}


export default VerefyOTP;
