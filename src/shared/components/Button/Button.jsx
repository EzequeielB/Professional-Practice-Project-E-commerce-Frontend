import React from "react";
import styles from "./Button.module.css";
import { BUTTON_TYPES } from "../../constants";

const Button = ({ label, type = BUTTON_TYPES.BASE, ...rest }) => {
  const ButtonStyles = {
    [BUTTON_TYPES.BASE]: styles.button,
    [BUTTON_TYPES.LINK_BUTTON]: styles.linkButton,
    [BUTTON_TYPES.CANCEL]: styles.linkButton,
  };

  return (
    <button className={ButtonStyles[type]} {...rest}>
      {label}
    </button>
  );
};
export default Button;
