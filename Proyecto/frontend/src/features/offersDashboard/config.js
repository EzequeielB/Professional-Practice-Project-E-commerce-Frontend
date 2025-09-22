// form elements, columns y factories para OffersDashboard

export const formElementsCreate = [
  { type: "text", name: "nombre", label: "Nombre de la oferta", placeholder: "Ej: Black Friday" },
  { type: "number", name: "porcentaje", label: "Porcentaje de descuento", placeholder: "Ej: 20" },
  { type: "date", name: "fechaInicio", label: "Fecha de inicio" },
  { type: "date", name: "fechaFin", label: "Fecha de fin" },
  { type: "text", name: "descripcion", label: "Descripción", placeholder: "Breve descripción" },
  { type: "button", label: "Crear Oferta", submit: true },
];

export const formElementsEdit = [
  { type: "text", name: "nombre", label: "Nombre de la oferta", placeholder: "Ej: Black Friday" },
  { type: "number", name: "porcentaje", label: "Porcentaje de descuento", placeholder: "Ej: 20" },
  { type: "date", name: "fechaInicio", label: "Fecha de inicio" },
  { type: "date", name: "fechaFin", label: "Fecha de fin" },
  { type: "text", name: "descripcion", label: "Descripción", placeholder: "Breve descripción" },
  { type: "button", label: "Guardar cambios", submit: true },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
  { key: "porcentaje", label: "% Descuento" },
  {
    key: "fechaInicio",
    label: "Fecha inicio",
    render: (item) =>
      item.fechaInicio ? new Date(item.fechaInicio).toLocaleDateString() : "-",
  },
  {
    key: "fechaFin",
    label: "Fecha fin",
    render: (item) => (item.fechaFin ? new Date(item.fechaFin).toLocaleDateString() : "-"),
  },
  { key: "descripcion", label: "Descripción" },
];

export const getActions = ({ setSelectedItem, openModal, openDeleteModal, setItemToDelete }) =>
  (items, setItems) => [
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

/**
 * getHandleSubmit: la firma es la misma que usás en RolesDashboard
 * values: valores del form, helpers incluyen resetForm
 * items, setItems vienen de FormTableManager (que le pasa items & setItems)
 */
export const getHandleSubmit = ({ showPopup }) => (values, { resetForm, items, setItems }) => {
  // crear objeto oferta (con conversión mínima)
  const nuevoItem = {
    id: items.length + 1,
    nombre: values.nombre,
    porcentaje: Number(values.porcentaje),
    fechaInicio: values.fechaInicio,
    fechaFin: values.fechaFin,
    descripcion: values.descripcion,
  };

  setItems([...items, nuevoItem]);
  showPopup("Oferta creada correctamente", "success");
  resetForm();
};
