export const formElementsCreate = [
  {
    type: "text",
    name: "nombre",
    label: "Nombre del Rol",
    placeholder: "Ej: Administrador",
  },
  {
    type: "button",
    label: "Crear Rol",
    submit: true,
  },
];

export const formElementsEdit = [
  {
    type: "text",
    name: "nombre",
    label: "Nombre del Rol",
    placeholder: "Ej: Administrador",
  },
  {
    type: "button",
    label: "Guardar cambios",
    submit: true,
  },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
];

export const getActions = ({
  setSelectedItem,
  openModal,
  showPopup,
  openDeleteModal,
  setItemToDelete,
}) => (items, setItems) => [
  {
    label: "Editar",
    onClick: (item) => {
      setSelectedItem(item);
      openModal();
    },
  },
  {
    label: "Eliminar",
    onClick: (item) => {
      setItemToDelete(item);
      openDeleteModal();
    },
  },
];

export const getHandleSubmit = ({ showPopup }) => (values, { resetForm, items, setItems }) => {
  const nuevoItem = {
    id: items.length + 1,
    ...values,
  };

  setItems([...items, nuevoItem]);
  showPopup("Rol creado correctamente", "success");
  resetForm();
};
