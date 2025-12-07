export const formElements = () => [
  {
    type: "text",
    name: "name",
    label: "Marca",
    placeholder: "Ej: Adidas",
  },
  {
    type: "text",
    name: "external_reference",
    label: "Link de Referencia",
    placeholder: "Ej: https://www.adidas.com.ar/",
  },
  {
    type: "button",
    label: "Crear Marca",
    submit: true,
  },
];

export const formElementsEdit = () => [
  {
    type: "text",
    name: "name",
    label: "Marca",
    placeholder: "Ej: Adidas",
  },
  {
    type: "text",
    name: "external_reference",
    label: "Link de referencia",
    placeholder: "Ej: https://www.adidas.com.ar/",
  },
  {
    type: "button",
    label: "Guardar cambios",
    submit: true,
  },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Marca" },
  { key: "external_reference", label: "Link de referencia" },
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