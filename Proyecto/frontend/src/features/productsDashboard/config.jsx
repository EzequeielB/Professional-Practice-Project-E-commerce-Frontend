export const formElementsCreate = [
  { type: "text", name: "nombre", label: "Nombre", placeholder: "Ej: Remera básica" },
  { type: "text", name: "descripcion", label: "Descripción", placeholder: "Breve descripción" },
  { type: "text", name: "color", label: "Color (hex o nombre)", placeholder: "#ffffff o Blanco" },
  { type: "text", name: "precioUnitario", label: "Precio Unitario", placeholder: "0.00" },
  { type: "text", name: "imagen", label: "URL de la Imagen", placeholder: "https://..." },
  {
    type: "select",
    name: "categoria",
    label: "Categoría",
    options: [
      { value: "", label: "Seleccione categoría" },
      { value: "camisas", label: "Camisas" },
      { value: "pantalones", label: "Pantalones" },
      { value: "accesorios", label: "Accesorios" },
    ],
  },
  {
    type: "select",
    name: "oferta",
    label: "Oferta (opcional)",
    options: [
      { value: "", label: "Sin oferta" },
      { value: "10off", label: "10% off" },
      { value: "20off", label: "20% off" },
    ],
  },

  // separador visual dentro del form (usará FormElement -> 'divider')
  { type: "divider" },

  // sección avanzada
  { type: "section", label: "Gestión avanzada" },

  {
    type: "select",
    name: "talla",
    label: "Talla (opcional)",
    options: [
      { value: "", label: "Seleccione talla" },
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
    ],
  },
  { type: "text", name: "material", label: "Material (opcional)", placeholder: "Algodón, poliéster..." },
  {
    type: "select",
    name: "genero",
    label: "Género (opcional)",
    options: [
      { value: "", label: "Seleccione" },
      { value: "hombre", label: "Hombre" },
      { value: "mujer", label: "Mujer" },
      { value: "unisex", label: "Unisex" },
    ],
  },
  {
    type: "select",
    name: "temporada",
    label: "Temporada (opcional)",
    options: [
      { value: "", label: "Seleccione" },
      { value: "verano", label: "Verano" },
      { value: "invierno", label: "Invierno" },
      { value: "todo", label: "Todo el año" },
    ],
  },
  { type: "text", name: "sku", label: "SKU interno (opcional)", placeholder: "Código interno" },

  { type: "button", label: "Añadir Producto", submit: true },
];

export const formElementsEdit = [
  { type: "text", name: "nombre", label: "Nombre", placeholder: "Ej: Remera básica" },
  { type: "text", name: "descripcion", label: "Descripción", placeholder: "Breve descripción" },
  { type: "text", name: "color", label: "Color (hex o nombre)", placeholder: "#ffffff o Blanco" },
  { type: "text", name: "precioUnitario", label: "Precio Unitario", placeholder: "0.00" },
  { type: "text", name: "imagen", label: "URL de la Imagen", placeholder: "https://..." },
  {
    type: "select",
    name: "categoria",
    label: "Categoría",
    options: [
      { value: "", label: "Seleccione categoría" },
      { value: "camisas", label: "Camisas" },
      { value: "pantalones", label: "Pantalones" },
      { value: "accesorios", label: "Accesorios" },
    ],
  },
  { type: "divider" },
  { type: "section", label: "Gestión avanzada" },
  {
    type: "select",
    name: "talla",
    label: "Talla (opcional)",
    options: [
      { value: "", label: "Seleccione talla" },
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
    ],
  },
  { type: "text", name: "material", label: "Material (opcional)", placeholder: "Algodón, poliéster..." },
  {
    type: "select",
    name: "genero",
    label: "Género (opcional)",
    options: [
      { value: "", label: "Seleccione" },
      { value: "hombre", label: "Hombre" },
      { value: "mujer", label: "Mujer" },
      { value: "unisex", label: "Unisex" },
    ],
  },
  {
    type: "select",
    name: "temporada",
    label: "Temporada (opcional)",
    options: [
      { value: "", label: "Seleccione" },
      { value: "verano", label: "Verano" },
      { value: "invierno", label: "Invierno" },
      { value: "todo", label: "Todo el año" },
    ],
  },
  { type: "text", name: "sku", label: "SKU interno (opcional)", placeholder: "Código interno" },
  { type: "button", label: "Guardar cambios", submit: true },
];

export const columns = [
  { key: "id", label: "ID" },
  { key: "nombre", label: "Nombre" },
  { key: "categoria", label: "Categoría" },
  { key: "precioUnitario", label: "Precio" },
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
  {
    key: "oferta",
    label: "Oferta",
  },
];

export const getActions = ({
  setSelectedItem,
  openModal,
  openDeleteModal,
  setItemToDelete,
  openDetailsModal,
}) =>
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
    {
      label: "Ver Detalles",
      variant: "view",
      onClick: (item) => {
        setSelectedItem(item);
        openDetailsModal();
      },
    },
  ];



export const getHandleSubmit = ({ showPopup }) => (values, { resetForm, items, setItems }) => {
  try {
    const nuevoItem = {
      id: items.length + 1,
      nombre: values.nombre,
      descripcion: values.descripcion,
      color: values.color,
      precioUnitario: Number(values.precioUnitario),
      imagen: values.imagen,
      categoria: values.categoria,
      oferta: values.oferta || "",
      talla: values.talla || "",
      material: values.material || "",
      genero: values.genero || "",
      temporada: values.temporada || "",
      sku: values.sku || "",
    };

    setItems([...items, nuevoItem]);
    showPopup("Producto añadido correctamente", "success");
    resetForm();
  } catch (err) {
    showPopup("Error al añadir producto", "error");
  }
};
