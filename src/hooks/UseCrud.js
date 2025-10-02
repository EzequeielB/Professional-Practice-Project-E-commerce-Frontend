import { useState, useRef } from "react";

export function useCrud(keyField = "id", initial = []) {
  const [items, setItems] = useState(initial);
  const idRef = useRef(initial.length > 0 ? Math.max(...initial.map(i => i[keyField])) + 1 : 1);

  const addItem = (values) => {
    const newItem = {
      [keyField]: idRef.current++,
      ...values,
    };
    setItems(prev => [...prev, newItem]);
    return newItem;
  };

  const updateItem = (id, updatedValues) => {
    setItems(prev =>
      prev.map(item => (item[keyField] === id ? { ...item, ...updatedValues } : item))
    );
  };

  const removeItem = (id) => {
    setItems(prev => prev.filter(item => item[keyField] !== id));
  };

  return { items, setItems, addItem, updateItem, removeItem };
}
