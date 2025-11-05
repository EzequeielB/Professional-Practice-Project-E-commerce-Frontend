import InputField from "./InputField";
import SelectField from "./SelectField";
import FormButton from "./FormButton";
import MultiSelectField from "./MultiSelectField";

const FormElement = ({ element }) => {
  const {type, ...rest} = element;

  switch (type) {
    case "text":
    case "password":
    case "email":
    case "number":
    case "tel":
      return <InputField{... element}/>;

    case "select":
      return <SelectField{... rest}/>;

    case "multiselect":
      return <MultiSelectField {...rest} />;

    case "button":
      return <FormButton{... rest}/>;

    default:
      return null;
  }
};

export default FormElement;
