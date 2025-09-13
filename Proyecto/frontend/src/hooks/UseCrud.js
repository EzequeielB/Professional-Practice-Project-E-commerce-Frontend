import { useState } from "react";

export function useCrud(keyField = "id") {
  const [items, setItems] = useState([]);

  const addItem = (values) => {
    const newItem = {
      [keyField]: items.length + 1,
      ...values,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const updateItem = (id, updatedValues) => {
    setItems((prev) =>
      prev.map((item) =>
        item[keyField] === id ? { ...item, ...updatedValues } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item[keyField] !== id));
  };

  return {
    items,
    setItems,
    addItem,
    updateItem,
    removeItem,
  };
}
