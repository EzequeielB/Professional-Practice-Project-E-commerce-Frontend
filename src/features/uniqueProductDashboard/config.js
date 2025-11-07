export const formElements = (brands = [], sizes = []) => [
  {
    type: "text",
    name: "name",
    label: "Nombre del Producto Único",
    placeholder: "Ej: Zapatilla Air Max",
  },

  {
    type: "text",
    name: "color",
    label: "Color",
    placeholder: "Ej: Negro",
  },
  {
    type: "select",
    name: "id_brand",
    label: "Marca",
    options: [
      { value: "", label: "Sin marca" },
      ...brands.map((b) => ({ value: b.id, label: b.name })),
    ],
  },
  {
    type: "multiselect",
    name: "size",
    label: "Tallas disponibles",
    options: sizes.map((s) => ({ value: s.id, label: s.size })),
  },
  {
    type: "number",
    name: "stock.count",
    label: "Stock inicial",
    placeholder: "Ej: 50",
    min: "0",
  },
  {
    type: "button",
    label: "Crear Producto Único",
    submit: true,
  },
];

export const formElementsEdit = formElements;

export const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nombre" },
  { key: "color", label: "Color" },
  {
    key: "brand",
    label: "Marca",
    render: (item) => item.brand?.name || "—",
  },
  {
    key: "size",
    label: "Tallas",
    render: (item) => item.size?.map((s) => s.size).join(", ") || "—",
  },
  {
    key: "stock",
    label: "Stock",
    render: (item) => item.stock?.count ?? "—",
  },
];

export const getActions =
  ({ setSelectedItem, openModal, openDeleteModal, setItemToDelete }) =>
  () => [
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
      id_brand: values.id_brand === "" ? null : Number(values.id_brand),
      size: Array.isArray(values.size) ? values.size.map((s) => Number(s)) : [],
      stock: {
        count: Number(values.stock?.count || 0),
      },
      is_deleted: false,
    };

    setItems([...items, nuevoItem]);
    toast.success("Producto único creado correctamente");
    resetForm();
  };
