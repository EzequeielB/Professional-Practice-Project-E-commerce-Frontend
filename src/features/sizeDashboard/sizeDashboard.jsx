// src/pages/SizesDashboard/index.jsx
import React, { useEffect, useState } from "react";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import EditModal from "../../shared/components/Modal/EditModal";
import DeleteModal from "../../shared/components/Modal/DeleteModal";
import { initialValues } from "./validations/initialvalues";
import { validationSchema } from "./validations/validationSchema";
import { formElements, formElementsEdit, getActions, columns } from "./config";
import { useModal } from "../../hooks/useModal";
import { useSize } from "../../hooks/useSize";
import { Container } from "../../shared/components";
import { toast } from "react-toastify";

const SizesDashboard = () => {
  const { list, create, update, remove, error } = useSize(); // expone error por si querés mostrarlo
  const [sizes, setSizes] = useState([]);

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

  const [selectedItem, setSelectedItem] = useState(null);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await list();
      setSizes(data);
    })();
  }, []);

  const handleCreate = async (values, { resetForm }) => {
    console.log("Payload enviado:", values);
    const newSize = await create(values);
    console.log("Respuesta del back:", newSize);
    if (newSize) {
      setSizes([...sizes, newSize]);
      toast.success("Talle creado correctamente");
      resetForm();
    } else {
      toast.error("No se pudo crear el talle");
    }
  };

  const handleSaveEdit = async (updatedValues) => {
    const updatedItem = await update(selectedItem.id, updatedValues);
    if (updatedItem) {
      setSizes(sizes.map((s) => (s.id === selectedItem.id ? updatedItem : s)));
      toast.success("Talle editado correctamente");
      closeEditModal();
    } else {
      toast.error("No se pudo editar el talle");
    }
  };

  const handleConfirmDelete = async () => {
    const deleted = await remove(itemToDelete.id);
    if (deleted) {
      setSizes(sizes.filter((s) => s.id !== itemToDelete.id));
      toast.success("Talle eliminado correctamente");
      closeDeleteModal();
    } else {
      toast.error("No se pudo eliminar el talle");
    }
  };

  return (
    <Container>
      <FormTableManager
        title="Gestión de Talles"
        formElements={formElements()}          
        initialValues={initialValues}
        validationSchema={validationSchema}
        columns={columns}
        getActions={getActions({
          setSelectedItem,
          openModal: openEditModal,
          openDeleteModal,
          setItemToDelete,
        })}
        getHandleSubmit={handleCreate}
        keyField="id"
        items={sizes}
        setItems={setSizes}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        item={selectedItem}
        formElements={formElementsEdit()}
        validationSchema={validationSchema}
        onSave={handleSaveEdit}
        entityLabel="talle"
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

export default SizesDashboard;
