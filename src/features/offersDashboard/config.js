export const formElementsCreate = [
  {
    type: "text",
    name: "nombre",
    label: "Nombre de la oferta",
    placeholder: "Ej: Black Friday",
  },
  {
    type: "number",
    name: "porcentaje",
    label: "Porcentaje de descuento",
    placeholder: "Ej: 20",
  },
  {
    type: "text",
    name: "descripcion",
    label: "Descripción",
    placeholder: "Breve descripción",
  },
  { type: "button", label: "Crear Oferta", submit: true },
];

export const formElementsEdit = [
  {
    type: "text",
    name: "nombre",
    label: "Nombre de la oferta",
    placeholder: "Ej: Black Friday",
  },
  {
    type: "number",
    name: "porcentaje",
    label: "Porcentaje de descuento",
    placeholder: "Ej: 20",
  },
  {
    type: "text",
    name: "descripcion",
    label: "Descripción",
    placeholder: "Breve descripción",
  },
  { type: "button", label: "Guardar cambios", submit: true },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
  { key: "porcentaje", label: "% Descuento" },
  { key: "descripcion", label: "Descripción" },
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
    toast.success("Oferta creada correctamente", "success");
    resetForm();
  };
