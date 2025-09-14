// src/features/productsDashboard/ProductsDashboard.jsx
import React, { useState } from "react";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import EditModal from "../../shared/components/Modal/EditModal";
import DeleteModal from "../../shared/components/Modal/DeleteModal";
import PopUpMessage from "../../shared/components/PopUpMessage/PopUpMessage";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema.js";
import {
  formElementsCreate,
  formElementsEdit,
  getHandleSubmit,
  getActions,
  columns,
} from "./config";
import { useModal } from "../../hooks/useModal";
import { usePopup } from "../../hooks/usePopup";
import { useCrud } from "../../hooks/UseCrud";
import { Container } from "../../shared/components";
import styles from "./dashboard.module.css";

const ProductsDashboard = () => {
  const { items, setItems } = useCrud("id");

  const {
    isOpen: isEditOpen,
    openModal: openEditModal,
    closeModal: closeEditModal,
  } = useModal();

  const {
    isOpen: isDeleteOpen,
    openModal: openDeleteModal,
    closeModal: closeDeleteModal,
  } = useModal();

  const { popup, showPopup, hidePopup } = usePopup();
  const [selectedItem, setSelectedItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleSaveEdit = (updatedValues) => {
    const actualizados = items.map((i) =>
      i.id === selectedItem.id ? { ...i, ...updatedValues } : i
    );
    setItems(actualizados);
    showPopup("Producto editado correctamente", "success");
    closeEditModal();
  };

  const handleConfirmDelete = () => {
    const actualizados = items.filter((i) => i.id !== itemToDelete.id);
    setItems(actualizados);
    showPopup("Producto eliminado correctamente", "success");
    closeDeleteModal();
  };

  return (
    <Container>
      <h2>Gestión de Productos</h2>

      <FormTableManager
        title="" /* ya tenemos el h2 arriba, evitar duplicado */
        formElements={formElementsCreate}
        initialValues={initialValues}
        validationSchema={validationSchema}
        columns={columns}
        getActions={getActions({
          setSelectedItem,
          openModal: openEditModal,
          openDeleteModal,
          setItemToDelete,
        })}
        getHandleSubmit={getHandleSubmit({ showPopup })}
        keyField="id"
        items={items}
        setItems={setItems}
      />

      {popup.show && (
        <PopUpMessage message={popup.message} type={popup.type} onClose={hidePopup} />
      )}

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        item={selectedItem}
        formElements={formElementsEdit}
        validationSchema={validationSchema}
        onSave={handleSaveEdit}
        entityLabel="producto"
      />

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={closeDeleteModal}
        item={itemToDelete}
        onConfirm={handleConfirmDelete}
      />
    </Container>
  );
};

export default ProductsDashboard;
