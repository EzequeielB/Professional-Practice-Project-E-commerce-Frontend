import React, { useState, useMemo, useRef, useEffect } from "react";
import { useField } from "formik";
import styles from "./styles/InputField.module.css";
import selectStyles from "./styles/Select.module.css";

const SearchableSingleSelectField = ({ label, name, options = [] }) => {
  const [field, meta, helpers] = useField(name);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const selectedValue = field.value;

  const filteredOptions = useMemo(() => {
    return options.filter(
      (opt) =>
        opt.value !== selectedValue &&
        opt.label.toLowerCase().includes(query.toLowerCase())
    );
  }, [options, query, selectedValue]);

  const handleSelect = (value) => {
    helpers.setValue(value);
    setQuery("");
    setOpen(false);
  };

  const clearSelection = () => {
    helpers.setValue("");
    setQuery("");
  };

  const selectedLabel = options.find((o) => o.value === selectedValue)?.label;

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

      <div className={selectStyles.singleWrapper}>
        <input
          type="text"
          className={selectStyles.searchInput}
          value={selectedLabel || query}
          onChange={(e) => {
            setQuery(e.target.value);
            helpers.setValue("");
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Buscar..."
        />

        {selectedValue && (
          <button
            type="button"
            className={selectStyles.clearButton}
            onClick={clearSelection}
          >
            ✕
          </button>
        )}
      </div>

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

export default SearchableSingleSelectField;
