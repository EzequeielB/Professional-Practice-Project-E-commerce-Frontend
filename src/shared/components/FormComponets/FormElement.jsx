import InputField from "./InputField";
import FormButton from "./FormButton";
import UrlListField from "./UrlFieldList";
import FileUploadField from "./FileUploadField";
import SearchableMultiSelectField from "./SearchableMultiSelectField";
import SearchableSingleSelectField from "./SearchableSingleSelectField";

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

    case "searchable-select":
      return <SearchableSingleSelectField {...rest} />;

    case "searchable-multiselect":
      return <SearchableMultiSelectField {...rest} />;

    case "button":
      return <FormButton {...rest} />;

    case "urls":
      return (
        <UrlListField key={rest.name} name={rest.name} label={rest.label} />
      );

    case "files":
      return (
        <FileUploadField key={rest.name} name={rest.name} label={rest.label} />
      );

    default:
      return null;
  }
};

export default FormElement;
