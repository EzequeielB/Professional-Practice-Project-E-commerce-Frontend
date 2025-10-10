import { Container, DynamicForm, Title } from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema";
import { formElements } from "./config";
import { useNavigate } from "react-router";

function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log("Datos del formulario:", values);
    navigate(ROUTES.VERIFY_OTP);
  };

  return (
    <Container>
      <Title
        title={"Restablecer Contraseña"}
        description={
          "Ingresá tu e-mail de registro para comenzar a cambiar tu contraseña"
        }
      />
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
