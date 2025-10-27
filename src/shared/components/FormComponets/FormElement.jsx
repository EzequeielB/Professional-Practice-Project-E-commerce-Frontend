import React, { useState } from "react";
import { useField } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import InputField from "./InputField";
import SelectField from "./SelectField";
import FormButton from "./FormButton";
import Divider from "../Divider/Divider";
import styles from "./styles/Form.module.css";

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

    case "button":
      return <FormButton{... rest}/>;

    default:
      return null;
  }
};

export default FormElement;
