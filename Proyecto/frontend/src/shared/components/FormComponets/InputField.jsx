import React, { useState } from "react";
import { useField } from "formik";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styles from "./styles/InputField.module.css";

const InputField = ({ type, name, label, showForgotPassword = false, forgotPasswordLink = "#", ...rest }) => {
  const [field, meta] = useField(name);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={styles.inputField}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.inputWrapper}>
        <input id={name} type={inputType} {...field} {...rest} />
        {type === "password" && (
          <span className={styles.passwordToggle} onClick={togglePassword}>
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        )}
      </div>
      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
      {type === "password" && showForgotPassword && (
        <div className={styles.forgotPassword}>
          <a href={forgotPasswordLink}>¿Olvidaste tu contraseña?</a>
        </div>
      )}
    </div>
  );
};

export default InputField;
