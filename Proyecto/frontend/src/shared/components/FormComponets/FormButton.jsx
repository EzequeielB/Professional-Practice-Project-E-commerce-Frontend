import React from "react";
import styles from "./styles/Button.module.css";
const FormButton = ({ label, submit, ...rest }) => {
  return (
    <button style={styles.button} type={submit ? "submit" : "button"} {...rest}>
      {label}
    </button>
  );
};
export default FormButton;
