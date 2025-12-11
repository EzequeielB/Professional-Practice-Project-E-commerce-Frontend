import React, { useEffect, useState, useRef } from "react";
import { useField } from "formik";

const FileUploadField = ({ name, label }) => {
  const [field, , helpers] = useField(name);
  const [previews, setPreviews] = useState([]);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const files = Array.from(e.target.files);

    helpers.setValue(files);

    const newPreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setPreviews(newPreviews);
  };

  const handleRemove = (index) => {
    const newFiles = [...field.value];
    newFiles.splice(index, 1);

    helpers.setValue(newFiles);

    const newPreviews = [...previews];
    URL.revokeObjectURL(newPreviews[index].preview);
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (newFiles.length > 0 && inputRef.current) {
      const dataTransfer = new DataTransfer();
      newFiles.forEach((file) => dataTransfer.items.add(file));
      inputRef.current.files = dataTransfer.files;
    }
  };

  useEffect(() => {
    if (field.value.length === 0) {
      previews.forEach((p) => URL.revokeObjectURL(p.preview));
      setPreviews([]);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  }, [field.value]);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>

      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleChange}
        style={{ display: "block", marginTop: "6px" }}
      />

      {previews.length > 0 && (
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "12px",
            flexWrap: "wrap",
          }}
        >
          {previews.map((p, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                width: 70,
                height: 70,
              }}
            >
              <img
                src={p.preview}
                alt={`preview-${idx}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                }}
              />

              <button
                type="button"
                onClick={() => handleRemove(idx)}
                style={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  background: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: 22,
                  height: 22,
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploadField;
