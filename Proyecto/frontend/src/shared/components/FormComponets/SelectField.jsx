import React from "react";
import { useField } from "formik";
import styles from './styles/InputField.module.css'
import styleSelect from './styles/Select.module.css'
const SelectField = ({ label, name, options = [], ...rest }) => {
    const [field, meta]= useField(name)
  return (
    <div className={styles.input-field}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.inputWrapper}>
        <select className={styleSelect.selectInput} id={name} {...field} {...rest}>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
    </div>
  );
}

export default SelectField;