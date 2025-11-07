export const formElementsCreate = [
  {
    type: "text",
    name: "nombre",
    label: "Nombre de la categoría",
    placeholder: "Ej: Camisas",
  },
  {
    type: "text",
    name: "imagen",
    label: "URL de la imagen",
    placeholder: "https://...",
  },
  {
    type: "select",
    name: "padre",
    label: "Categoría Padre",
    options: [
      { value: "", label: "-- Ninguna --" },
      { value: "Hombre", label: "Hombre" },
      { value: "Mujer", label: "Mujer" },
      { value: "Niños", label: "Niños" },
    ],
  },
  {
    type: "button",
    label: "Crear categoría",
    submit: true,
  },
];

export const formElementsEdit = [
  {
    type: "text",
    name: "nombre",
    label: "Nombre de la categoría",
    placeholder: "Ej: Camisas",
  },
  {
    type: "text",
    name: "imagen",
    label: "URL de la imagen",
    placeholder: "https://...",
  },
  {
    type: "select",
    name: "padre",
    label: "Categoría Padre",
    options: [
      { value: "", label: "-- Ninguna --" },
      { value: "Hombre", label: "Hombre" },
      { value: "Mujer", label: "Mujer" },
      { value: "Niños", label: "Niños" },
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
  { key: "nombre", label: "Nombre" },
  { key: "padre", label: "Categoría Padre" },
  {
    key: "imagen",
    label: "Imagen",
    render: (item) => (
      <img
        src={item.imagen}
        alt={item.nombre}
        style={{ width: 48, height: 48, objectFit: "cover", borderRadius: 4 }}
      />
    ),
  },
];

export const getActions =
  ({ setSelectedItem, openModal, openDeleteModal, setItemToDelete }) =>
  (items, setItems) =>
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
    toast.success("Categoría creada correctamente", "success");
    resetForm();
  };
