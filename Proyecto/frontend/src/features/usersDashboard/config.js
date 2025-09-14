// Formulario de creación
export const formElementsCreate = [
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "usuario@ejemplo.com",
  },
  {
    type: "text",
    name: "telefono",
    label: "Teléfono",
    placeholder: "+54 9 1234 5678",
  },
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
  {
    type: "button",
    label: "Crear Usuario",
    submit: true,
  },
];

// Formulario de edición
export const formElementsEdit = [
  {
    type: "text",
    name: "email",
    label: "Email",
    placeholder: "usuario@ejemplo.com",
  },
  {
    type: "text",
    name: "telefono",
    label: "Teléfono",
    placeholder: "+54 9 1234 5678",
  },
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
  {
    type: "button",
    label: "Guardar cambios",
    submit: true,
  },
];

// Columnas de la tabla
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
