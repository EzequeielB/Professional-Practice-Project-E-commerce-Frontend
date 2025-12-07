import { useField, useFormikContext } from "formik";
import { useState, useEffect } from "react";

const UrlListField = ({ name, label }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();


  const initial = Array.isArray(field.value)
    ? field.value.map((item) =>
        typeof item === "string"
          ? { id: null, url: item }
          : { id: item.id || null, url: item.url || "" }
      )
    : [];

  const [images, setImages] = useState(initial);

  useEffect(() => {
    setFieldValue(name, images);
  }, [images]);

  const handleAdd = () =>
    setImages([...images, { id: null, url: "" }]);

  const handleRemove = (index) =>
    setImages(images.filter((_, i) => i !== index));

  const handleChange = (index, value) => {
    const updated = [...images];
    updated[index] = { ...updated[index], url: value };
    setImages(updated);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>{label}</label>
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "0.5rem",
            gap: "0.5rem",
          }}
        >
          <input
            type="text"
            value={img.url}
            onChange={(e) => handleChange(index, e.target.value)}
            placeholder={`URL #${index + 1}`}
            style={{ flex: 1 }}
          />
          <button
            type="button"
            onClick={() => handleRemove(index)}
            style={{
              color: "white",
              background: "red",
              border: "none",
              padding: "0.4rem 0.6rem",
              borderRadius: "4px",
            }}
          >
            ✕
          </button>
        </div>
      ))}

      <button type="button" onClick={handleAdd}>
        + Agregar URL
      </button>
    </div>
  );
};

export default UrlListField;
