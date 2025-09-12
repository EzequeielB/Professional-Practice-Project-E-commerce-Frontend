import { useState } from "react";

export function useCrud(keyField = "id") {
  const [items, setItems] = useState([]);

  const addItem = (values) => {
    const newItem = { [keyField]: items.length + 1, ...values };
    setItems([...items, newItem]);
    return newItem;
  };

  const editItem = (id, updatedValues) => {
    setItems(items.map((item) =>
      item[keyField] === id ? { ...item, ...updatedValues } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item[keyField] !== id));
  };

  return { items, addItem, editItem, deleteItem };
}
