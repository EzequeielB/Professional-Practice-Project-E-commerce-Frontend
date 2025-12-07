import React, { useEffect, useState } from "react";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import EditModal from "../../shared/components/Modal/EditModal";
import DeleteModal from "../../shared/components/Modal/DeleteModal";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema";
import { formElements, formElementsEdit, getActions, columns } from "./config";
import { useModal } from "../../hooks/useModal";
import { useProducts } from "../../hooks/useProducts";
import { useCategory } from "../../hooks/useCategory";
import { useUniqueProducts } from "../../hooks/useUniqueProducts";
import { Container } from "../../shared/components";
import { toast } from "react-toastify";

const ProductsDashboard = () => {
  const { list, create, update, remove } = useProducts();
  const { list: listCategories } = useCategory();
  const { list: listUniqueProducts } = useUniqueProducts();

  const [categories, setCategories] = useState([]);
  const [uniqueProducts, setUniqueProducts] = useState([]);
  const [products, setProducts] = useState([]);

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
      const [data, cats, uniques] = await Promise.all([
        list(),
        listCategories(),
        listUniqueProducts(),
      ]);
      setProducts(Array.isArray(data) ? data : []);
      setCategories(cats);
      setUniqueProducts(uniques);
    })();
  }, []);

const handleCreate = async (values, { resetForm }) => {
  const payload = {
    ...values,
    offer: Number(values.offer),
    unit_price: Number(values.unit_price),
    categories: values.categories.map((c) => Number(c)),
    uniqueProducts: values.uniqueProducts.map((u) => Number(u)),
    images: values.images.map((i) => i.url),
  };


  const newProduct = await create(payload);
  if (newProduct) {
    setProducts((prev) => [...prev, newProduct]);
    toast.success("Producto creado correctamente");
    resetForm();
  }
};

  
const handleSaveEdit = async (updatedValues) => {
  const { id, ...rest } = updatedValues;

  const payload = {
    ...rest,
    offer: Number(rest.offer),
    unit_price: Number(rest.unit_price),
    categories: rest.categories.map((c) => Number(c)),
    uniqueProducts: rest.uniqueProducts.map((u) => Number(u)),
    images: rest.images.map((i) => i.url),
  };



  const updated = await update(selectedItem.id, payload);
  if (updated) {
    setProducts((prev) =>
      prev.map((p) => (p.id === selectedItem.id ? updated : p))
    );
    toast.success("Producto editado correctamente");
    closeEditModal();
  }
};


  const handleConfirmDelete = async () => {
    const deleted = await remove(itemToDelete.id);
    if (deleted) {
      setProducts((prev) => prev.filter((p) => p.id !== itemToDelete.id));
      toast.success("Producto eliminado correctamente");
      closeDeleteModal();
    }
  };

  return (
    <Container>
      <FormTableManager
        title="Gestión de Productos"
        formElements={formElements(categories, uniqueProducts)}
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
        items={products}
        setItems={setProducts}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        item={selectedItem}
        formElements={formElementsEdit(categories, uniqueProducts)}
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
