import { Container, DynamicForm, Title } from "../../shared/components";
import "@fontsource/iceberg";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema";
import { formElements } from "./config";
import { useNavigate } from "react-router";
import { ROUTES } from "../../Router/routesConfig";

function ChangePassword() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <Container>
      <Title title={"Cambiar contraseña"} description={"Ingrese la nueva contraseña que quiera utilizar"}/>
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
