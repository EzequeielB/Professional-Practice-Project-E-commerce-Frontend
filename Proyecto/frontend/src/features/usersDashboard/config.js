// src/features/usersDashboard/config.js
export const formElementsCreate = [
  { type: "text", name: "email", label: "Email", placeholder: "usuario@ejemplo.com" },
  { type: "text", name: "telefono", label: "Teléfono", placeholder: "+54 9 11 1234 5678" },
  {
    type: "select",
    name: "rol",
    label: "Rol",
    options: [
      { value: "", label: "Seleccione un rol (opcional)" },
      { value: "admin", label: "Administrador" },
      { value: "editor", label: "Editor" },
      { value: "viewer", label: "Visualizador" },
    ],
  },
  { type: "button", label: "Crear Usuario", submit: true },
];

export const formElementsEdit = [
  { type: "text", name: "email", label: "Email", placeholder: "usuario@ejemplo.com" },
  { type: "text", name: "telefono", label: "Teléfono", placeholder: "+54 9 11 1234 5678" },
  {
    type: "select",
    name: "rol",
    label: "Rol",
    options: [
      { value: "", label: "Seleccione un rol (opcional)" },
      { value: "admin", label: "Administrador" },
      { value: "editor", label: "Editor" },
      { value: "viewer", label: "Visualizador" },
    ],
  },
  { type: "button", label: "Guardar cambios", submit: true },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "email", label: "Email" },
  { key: "telefono", label: "Teléfono" },
  { key: "rol", label: "Rol" },
  {
    key: "activo",
    label: "Activo",
    render: (item) => (item.activo ? "Sí" : "No"),
  },
];

// getActions: devuelve una función que FormTableManager llamará con (items, setItems)
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

// getHandleSubmit: firma idéntica a la de Roles
export const getHandleSubmit = ({ showPopup }) => (values, { resetForm, items, setItems }) => {
  const nuevoItem = {
    id: items.length + 1,
    ...values,
    activo: values.activo ?? true,
  };

  setItems([...items, nuevoItem]);
  showPopup("Usuario creado correctamente", "success");
  resetForm();
};
