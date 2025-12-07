import InputField from "./InputField";
import SelectField from "./SelectField";
import FormButton from "./FormButton";
import MultiSelectField from "./MultiSelectField";
import UrlListField from "./UrlFieldList";

const FormElement = ({ element }) => {
  const { type, ...rest } = element;

  switch (type) {
    case "text":
    case "password":
    case "email":
    case "number":
    case "tel":
    case "textarea":
      return <InputField {...element} />;

    case "select":
      return <SelectField {...rest} />;

    case "multiselect":
      return <MultiSelectField {...rest} />;

    case "button":
      return <FormButton {...rest} />;

    case "urls":
      return (
        <UrlListField key={rest.name} name={rest.name} label={rest.label} />
      );

    default:
      return null;
  }
};

export default FormElement;
