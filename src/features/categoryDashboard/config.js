export const formElements = (categories = []) => [
  {
    type: "text",
    name: "name",
    label: "Nombre de la Categoría",
    placeholder: "Ej: Remeras",
  },
  {
    type: "select",
    name: "id_category_parent",
    label: "Categoría Padre (opcional)",
    options: [
      { value: "", label: "Sin categoría padre" },
      ...categories.map((c) => ({
        value: c.id,
        label: c.name,
      })),
    ],
  },
  {
    type: "button",
    label: "Crear Categoría",
    submit: true,
  },
];

export const formElementsEdit = (categories = []) => [
  {
    type: "text",
    name: "name",
    label: "Nombre de la Categoría",
    placeholder: "Ej: Remeras",
  },
  {
    type: "select",
    name: "id_category_parent",
    label: "Categoría Padre (opcional)",
    options: [
      { value: "", label: "Sin categoría padre" },
      ...categories.map((c) => ({
        value: c.id,
        label: c.name,
      })),
    ],
  },
  {
    type: "button",
    label: "Guardar cambios",
    submit: true,
  },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nombre" },
  {
    key: "id_category_parent",
    label: "Categoría Padre",
    render: (item, allItems) => {
      const parent = allItems.find((c) => c.id === item.id_category_parent);
      return parent ? parent.name : "—";
    },
  },
];

export const getActions =
  ({ setSelectedItem, openModal, openDeleteModal, setItemToDelete }) =>
  () =>
    [
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
