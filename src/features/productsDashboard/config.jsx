export const formElements = (categories = [], uniqueProducts = []) => [
  {
    type: "text",
    name: "name",
    label: "Nombre del Producto",
    placeholder: "Ej: Zapatilla Air Max",
  },
  {
    type: "textarea",
    name: "description",
    label: "Descripción",
    placeholder: "Ej: Zapatilla deportiva con cámara de aire",
  },
    {
    type: "number",
    name: "offer",
    label: "Oferta (%)",
    placeholder: "Ej: 15.5",
    step: "0.01",
    min: "0",
  },
  {
    type: "number",
    name: "unit_price",
    label: "Precio Unitario",
    placeholder: "Ej: 120",
    step: "0.01",
    min: "0",
  },
  {
    type: "multiselect",
    name: "categories",
    label: "Categorías",
    options: categories.map((c) => ({ value: c.id, label: c.name })),
  },
  {
    type: "multiselect",
    name: "uniqueProducts",
    label: "Productos Únicos Relacionados",
    options: uniqueProducts.map((u) => ({ value: u.id, label: u.name })),
  },
  {
    type: "urls",
    name: "images",
    label: "URLs de imágenes",
  },
  {
    type: "button",
    label: "Crear Producto",
    submit: true,
  },
];

export const formElementsEdit = formElements;

export const columns = [
  { key: "id", label: "ID" },
  { key: "name", label: "Nombre" },
  { key: "description", label: "Descripción" },
  {key: "offer", label:"Oferta"},
  {key: "unit_price", label:"Precio Unidad"},
  {
    key: "categories",
    label: "Categorías",
    render: (product) =>
      product.categories?.length
        ? product.categories.map((c) => c.name).join(", ")
        : "—",
  },
  {
    key: "uniqueProducts",
    label: "Productos únicos",
    render: (product) =>
      product.uniqueProducts?.length
        ? product.uniqueProducts.map((p) => p.name).join(", ")
        : "—",
  },
  {
    key: "images",
    label: "Imágenes",
    render: (product) =>
      product.images?.length ? (
        <div style={{ display: "flex", gap: "6px", justifyContent: "center" }}>
          {product.images.slice(0, 3).map((img, i) => (
            <img
              key={i}
              src={img.url}
              alt={`img-${i}`}
              style={{
                width: 40,
                height: 40,
                objectFit: "cover",
                borderRadius: 6,
                border: "1px solid #ccc",
              }}
            />
          ))}
        </div>
      ) : (
        "—"
      ),
  },
];

export const getActions =
  ({ setSelectedItem, openModal, openDeleteModal, setItemToDelete }) =>
  () => [
    {
      label: "Editar",
      variant: "edit",
      onClick: (item) => {
        const normalized = {
          ...item,
          images:
            item.images?.map((img) =>
              typeof img === "string"
                ? { url: img }
                : { id: img.id, url: img.url }
            ) || [],
        };

        setSelectedItem(normalized);
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
