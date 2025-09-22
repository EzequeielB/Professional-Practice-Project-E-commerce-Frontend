import React from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import FormButton from "./FormButton";
import Divider from "../ContainerAndDivider/Divider";
import styles from "./styles/Form.module.css";

const FormElement = ({ element }) => {
  const { type, ...rest } = element;

  switch (type) {
    case "text":
    case "password":
    case "email":
    case "number":
    case "tel":
    case "date":
      return <InputField type={type} {...rest} />;

    case "select":
      return <SelectField {...rest} />;

    case "button":
      return <FormButton {...rest} />;

    case "divider":
      return <Divider />;

    case "section":
      return (
        <div className={styles.formSectionHeader || ""} style={{ marginTop: "1rem", marginBottom: "0.5rem" }}>
          <h3 style={{ margin: 0 }}>{element.label}</h3>
        </div>
      );

    default:
      return null;
  }
};

export default FormElement;
