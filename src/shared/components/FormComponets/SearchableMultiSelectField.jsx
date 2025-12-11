import React, { useState, useMemo, useRef, useEffect } from "react";
import { useField } from "formik";
import styles from "./styles/InputField.module.css";
import selectStyles from "./styles/Select.module.css";

const SearchableMultiSelectField = ({ label, name, options = [] }) => {
  const [field, meta, helpers] = useField(name);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedValues = field.value || [];

  const filteredOptions = useMemo(() => {
    return options.filter(
      (opt) =>
        !selectedValues.includes(opt.value) &&
        opt.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [options, query, selectedValues]);

  const handleSelect = (value) => {
    helpers.setValue([...selectedValues, value]);
    setQuery("");
    setOpen(false);
  };

  const handleRemove = (value) => {
    helpers.setValue(selectedValues.filter((v) => v !== value));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className={styles["input-field"]}>
      {label && <label htmlFor={name}>{label}</label>}

      <div className={selectStyles.chipsContainer}>
        {selectedValues.map((value) => {
          const opt = options.find((o) => o.value === value);
          return (
            <div key={value} className={selectStyles.chip}>
              <span>{opt?.label}</span>
              <button
                type="button"
                className={selectStyles.removeChip}
                onClick={() => handleRemove(value)}
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>

      <input
        type="text"
        className={selectStyles.searchInput}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        placeholder="Buscar..."
      />

      {open && filteredOptions.length > 0 && (
        <ul className={selectStyles.dropdown}>
          {filteredOptions.map((opt) => (
            <li
              key={opt.value}
              className={selectStyles.option}
              onClick={() => handleSelect(opt.value)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}

      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};

export default SearchableMultiSelectField;
