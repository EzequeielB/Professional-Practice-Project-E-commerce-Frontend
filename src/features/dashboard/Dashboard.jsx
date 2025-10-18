import * as Yup from "yup";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import { Container } from "../../shared/components";

  const initialValues = {
    nombre: "",
    imagen: "",
    padre: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("Requerido"),
    imagen: Yup.string().url("Debe ser una URL válida").required("Requerido"),
  });

  const columns = [
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
          className={styles.imagenMiniatura}
        />
      ),
    },
  ];

  const actions = [
    {
      label: "Editar",
      onClick: (item, items, setItems) => {
        const nuevoNombre = prompt("Nuevo nombre:", item.nombre);
        if (nuevoNombre !== null && nuevoNombre.trim() !== "") {
          const actualizados = items.map((i) =>
            i.id === item.id ? { ...i, nombre: nuevoNombre } : i
          );
          setItems(actualizados);
        }
      },
    },
    {
      label: "Eliminar",
      onClick: (item, items, setItems) => {
        if (window.confirm(`¿Eliminar "${item.nombre}"?`)) {
          setItems(items.filter((i) => i.id !== item.id));
        }
      },
    },
  ];

  return (
    <Container>
      <FormTableManager
        title="Gestión de Categorías"
        formElements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        columns={columns}
        actions={actions}
        keyField="id"
      />
    </Container>
  );
};

export default Dashboard;
