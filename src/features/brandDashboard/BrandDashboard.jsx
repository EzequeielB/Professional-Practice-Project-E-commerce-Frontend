import React, { useEffect, useState } from "react";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import EditModal from "../../shared/components/Modal/EditModal";
import DeleteModal from "../../shared/components/Modal/DeleteModal";
import { initialValues } from "./validations/initialvalues";
import { validationSchema } from "./validations/validationSchema";
import { formElements, formElementsEdit, getActions, columns } from "./config";
import { useModal } from "../../hooks/useModal";
import { useBrand } from "../../hooks/useBrand";
import { Container } from "../../shared/components";
import { toast } from "react-toastify";

const BrandsDashboard = () => {
  const { list, create, update, remove, error } = useBrand();
  const [brands, setBrands] = useState([]);

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
      setBrands(data);
    })();
  }, []);

  const handleCreate = async (values, { resetForm }) => {
    const newBrand = await create(values);
    if (newBrand) {
      setBrands([...brands, newBrand]);
      toast.success("Marca creado correctamente");
      resetForm();
    } else {
      toast.error("No se pudo crear la marca");
    }
  };

  const handleSaveEdit = async (updatedValues) => {
    console.log("Valores enviados al update:", updatedValues);
    const updatedItem = await update(selectedItem.id, updatedValues);
    if (updatedItem) {
      setBrands(brands.map((b) => (b.id === selectedItem.id ? updatedItem : b)));
      toast.success("Marca editado correctamente");
      closeEditModal();
    } else {
      toast.error("No se pudo editar la marca");
    }
  };

  const handleConfirmDelete = async () => {
    const deleted = await remove(itemToDelete.id);
    if (deleted) {
      setBrands(brands.filter((b) => b.id !== itemToDelete.id));
      toast.success("Marca eliminado correctamente");
      closeDeleteModal();
    } else {
      toast.error("No se pudo eliminar la marca");
    }
  };

  return (
    <Container>
      <FormTableManager
        title="Gestión de Marcas"
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
        items={brands}
        setItems={setBrands}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        item={selectedItem}
        formElements={formElementsEdit()}
        validationSchema={validationSchema}
        onSave={handleSaveEdit}
        entityLabel="marca"
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

export default BrandsDashboard;
