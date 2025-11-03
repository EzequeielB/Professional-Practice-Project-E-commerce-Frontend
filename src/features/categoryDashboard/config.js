export const formElements = (categoriesOptions) => [
  {
    type: "text",
    name: "name",
    label: "Nombre de la Categoría",
    placeholder: "Ej: Electrónica",
  },
  {
    type: "select",
    name: "id_category_parent",
    label: "Categoría Padre (opcional)",
    options: [
      { value: "", label: "Sin categoría padre" },
      ...categoriesOptions,
    ],
  },
  {
    type: "button",
    label: "Crear Categoría",
    submit: true,
  },
];

export const formElementsEdit = (categoriesOptions) => [
  {
    type: "text",
    name: "name",
    label: "Nombre de la Categoría",
    placeholder: "Ej: Electrónica",
  },
  {
    type: "select",
    name: "id_category_parent",
    label: "Categoría Padre (opcional)",
    options: [
      { value: "", label: "Sin categoría padre" },
      ...categoriesOptions,
    ],
  },
  {
    type: "button",
    label: "Guardar cambios",
    submit: true,
  },
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


export const getHandleSubmit =
  ({ toast }) =>
  (values, { resetForm, items, setItems }) => {
    const nuevoItem = {
      id: items.length + 1,
      ...values,
    };

    setItems([...items, nuevoItem]);
    toast.success("Categoría creada correctamente");
    resetForm();
  };
