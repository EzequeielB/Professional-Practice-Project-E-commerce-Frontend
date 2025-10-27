import React, { useState } from "react";
import * as Yup from "yup";
import { Container } from "../../shared/components";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import {
  formElementsCreate,
  columns,
  getActions,
  getHandleSubmit,
} from "./config";
import { usePopup } from "../../hooks/UsePopUp";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [items, setItems] = useState([]);

  // Popups (éxito/error)
  const { showPopup } = usePopup();

  // Configurar acciones (editar y eliminar)
  const actions = getActions({
    setSelectedItem,
    openModal: () => showPopup("Abrir modal de edición", "info"),
    openDeleteModal: () => showPopup("Abrir modal de eliminación", "warning"),
    setItemToDelete,
  })(items, setItems);

  // Configurar submit
  const handleSubmit = getHandleSubmit({ showPopup });

  // Valores iniciales
  const initialValues = {
    nombre: "",
    imagen: "",
    padre: "",
  };

  // Validación con Yup
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required("El nombre es obligatorio"),
    imagen: Yup.string()
      .url("Debe ser una URL válida")
      .required("La imagen es obligatoria"),
    padre: Yup.string(),
  });

  return (
    <Container>
      <FormTableManager
        title="Gestión de Categorías"
        formElements={formElementsCreate}
        initialValues={initialValues}
        validationSchema={validationSchema}
        columns={columns}
        actions={actions}
        keyField="id"
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};

export default Dashboard;
