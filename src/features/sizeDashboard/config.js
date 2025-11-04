// src/pages/SizesDashboard/config.js
export const formElements = () => [
  {
    type: "text",
    name: "size",
    label: "Talle",
    placeholder: "Ej: M, L, XL",
  },
  {
    type: "button",
    label: "Crear Talle",
    submit: true, // imprescindible para disparar el submit
  },
];

export const formElementsEdit = () => [
  {
    type: "text",
    name: "size",
    label: "Talle",
    placeholder: "Ej: M, L, XL",
  },
  {
    type: "button",
    label: "Guardar cambios",
    submit: true,
  },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "size", label: "Talle" },
];

export const getActions = ({
  setSelectedItem,
  openModal,
  openDeleteModal,
  setItemToDelete,
}) => () => [
  {
    label: "Editar",
    variant: "edit",
    onClick: (item) => {
      setSelectedItem(item);
      openModal();
    },
  },
  {
    label: "Eliminar",
    variant: "delete",
    onClick: (item) => {
      setItemToDelete(item);
      openDeleteModal();
    },
  },
];
