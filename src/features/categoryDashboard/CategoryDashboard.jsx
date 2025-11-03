import React, { useEffect, useState } from "react";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import EditModal from "../../shared/components/Modal/EditModal";
import DeleteModal from "../../shared/components/Modal/DeleteModal";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema";
import {
  formElements,
  formElementsEdit,
  getActions,
  columns,
} from "./config";
import { useModal } from "../../hooks/useModal";
import { useCategory } from "../../hooks/useCategory";
import { Container } from "../../shared/components";
import { toast } from "react-toastify";

const CategoriesDashboard = () => {
  const { list, create, update, remove } = useCategory();
  const [categories, setCategories] = useState([]);

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
      setCategories(data);
    })();
  }, []);

  const handleCreate = async (values, { resetForm }) => {
    const newCat = await create(values);
    if (newCat) {
      setCategories([...categories, newCat]);
      toast.success("Categoría creada correctamente");
      resetForm();
    }
  };

  const handleSaveEdit = async (updatedValues) => {
    const updated = await update(selectedItem.id, updatedValues);
    if (updated) {
      setCategories(
        categories.map((c) => (c.id === selectedItem.id ? updated : c))
      );
      toast.success("Categoría editada correctamente");
      closeEditModal();
    }
  };

  const handleConfirmDelete = async () => {
    const deleted = await remove(itemToDelete.id);
    if (deleted) {
      setCategories(categories.filter((c) => c.id !== itemToDelete.id));
      toast.success("Categoría eliminada correctamente");
      closeDeleteModal();
    }
  };

  return (
    <Container>
      <FormTableManager
        title="Gestión de Categorías"
        formElements={formElements(categories)}
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
        items={categories}
        setItems={setCategories}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        item={selectedItem}
        formElements={formElementsEdit(categories)}
        validationSchema={validationSchema}
        onSave={handleSaveEdit}
        entityLabel="categoría"
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

export default CategoriesDashboard;
