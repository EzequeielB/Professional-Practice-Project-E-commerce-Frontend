import React, { useState } from "react";
import * as Yup from "yup";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import EditModal from "../../shared/components/Modal/EditModal";
import PopUpMessage from "../../shared/components/PopUpMessage/PopUpMessage";
import { useCrud } from "../../hooks/useCrud";
import { useModal } from "../../hooks/useModal";
import { usePopup } from "../../hooks/UsePopUp";
import { Container } from "../../shared/components";

const RolesDashboard = () => {
  const { items, addItem, editItem, deleteItem } = useCrud();
  const { isOpen, openModal, closeModal } = useModal();
  const { popup, showPopup, hidePopup } = usePopup();

  const [selectedItem, setSelectedItem] = useState(null);

  const formElements = [
    {
      type: "text",
      name: "nombre",
      label: "Nombre del Rol",
      placeholder: "Ej: Administrador",
    },
    {
      type: "button",
      label: "Crear Rol",
      submit: true,
    },
  ];

  const initialValues = {
    nombre: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es obligatorio"),
  });

  const columns = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
  ];

  const actions = [
    {
      label: "Editar",
      onClick: (item) => {
        setSelectedItem(item);
        openModal();
      },
    },
    {
      label: "Eliminar",
      onClick: (item, items, setItems) => {
        if (window.confirm(`¿Eliminar el rol "${item.nombre}"?`)) {
          const actualizados = items.filter((i) => i.id !== item.id);
          setItems(actualizados);
          showPopup("Rol eliminado correctamente", "success");
        }
      },
    },
  ];

  const handleSubmit = (values, { resetForm, setItems }) => {
    try {
      const nuevoItem = addItem(values);
      setItems([...items, nuevoItem]);
      showPopup("Rol creado correctamente", "success");
      resetForm();
    } catch (error) {
      showPopup("Error al crear el rol", "error");
    }
  };

  const handleSaveEdit = (updatedValues) => {
    editItem(selectedItem.id, updatedValues);
    showPopup("Rol editado correctamente", "success");
    closeModal();
  };

  return (
    <Container>
      <FormTableManager
        title="Gestión de Roles"
        formElements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        columns={columns}
        actions={actions}
        keyField="id"
        onSubmit={handleSubmit}
      />

      {popup.show && (
        <PopUpMessage
          message={popup.message}
          type={popup.type}
          onClose={hidePopup}
        />
      )}

      <EditModal
        isOpen={isOpen}
        onClose={closeModal}
        item={selectedItem}
        formElements={formElements}
        validationSchema={validationSchema}
        onSave={handleSaveEdit}
      />
    </Container>
  );
};

export default RolesDashboard;
