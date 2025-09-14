import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import FormButton from "./FormButton";

const FormElement = ({ element }) => {
  const { type, ...rest } = element;

  switch (type) {
    case "text":
    case "password":
    case "email":
    case "number":
    case "tel":
      return <InputField {...rest} />;

    case "select":
      return <SelectField {...rest} />;

    case "button":
      return <FormButton {...rest} />;

    default:
      return null;
  }
};

export default FormElement;
