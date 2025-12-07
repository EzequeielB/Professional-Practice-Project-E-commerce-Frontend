import React from "react";
import { useField } from "formik";
import styles from './styles/InputField.module.css';
import styleSelect from './styles/Select.module.css';

const MultiSelectField = ({ label, name, options = [], ...rest }) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, (opt) => opt.value);
    helpers.setValue(selected);
  };

  return (
    <div className={styles.input-field}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={styles.inputWrapper}>
        <select
          id={name}
          multiple
          className={styleSelect.selectInput}
          value={field.value || []}
          onChange={handleChange}
          {...rest}
        >
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
};

export default MultiSelectField;
