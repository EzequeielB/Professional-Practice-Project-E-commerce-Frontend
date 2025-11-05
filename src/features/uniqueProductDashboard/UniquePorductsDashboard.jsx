import React, { useEffect, useState } from "react";
import FormTableManager from "../../shared/components/FormComponets/FormTableMannager";
import EditModal from "../../shared/components/Modal/EditModal";
import DeleteModal from "../../shared/components/Modal/DeleteModal";
import { initialValues } from "./validations/initialValues";
import { validationSchema } from "./validations/validationSchema";
import { formElements, formElementsEdit, getActions, columns } from "./config";
import { useModal } from "../../hooks/useModal";
import { useBrand } from "../../hooks/useBrand";
import { useSize } from "../../hooks/useSize";
import { useUniqueProducts } from "../../hooks/useUniqueProducts";
import { Container } from "../../shared/components";
import { toast } from "react-toastify";

const UniqueProductsDashboard = () => {
  const { list, create, update, remove } = useUniqueProducts();
  const { listBrand } = useBrand();
  const { listSizes } = useSize();

  const [brands, setBrands] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [uniqueProducts, setUniqueProducts] = useState([]);

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
      const [data, brandList, sizeList] = await Promise.all([
        list(),
        listBrand(),
        listSizes(),
      ]);
      setUniqueProducts(Array.isArray(data) ? data : []);
      setBrands(brandList);
      setSizes(sizeList);
    })();
  }, []);

  const handleCreate = async (values, { resetForm }) => {
    const payload = {
      ...values,
      offer: Number(values.offer),
      unit_price: Number(values.unit_price),
      id_brand: values.id_brand === "" ? null : Number(values.id_brand),
      size: values.size.map((s) => Number(s)),
      stock: {
        count: Number(values.stock?.count || 0),
      },
    };

    console.log("tu payload:", payload)

    const newUnique = await create(payload);
    if (newUnique) {
      setUniqueProducts((prev) => [...prev, newUnique]);
      toast.success("Producto único creado correctamente");
      resetForm();
    }
  };

const handleSaveEdit = async (updatedValues) => {
  const { id, ...rest } = updatedValues;

  const payload = {
    ...rest,
    offer: Number(rest.offer),
    unit_price: Number(rest.unit_price),
    id_brand: rest.id_brand === "" ? null : Number(rest.id_brand),
    size: rest.size.map((s) => Number(s)),
    stock: {
      count: Number(rest.stock?.count || 0),
    },
  };

  const updated = await update(selectedItem.id, payload);
  if (updated) {
    setUniqueProducts((prev) =>
      prev.map((p) => (p.id === selectedItem.id ? updated : p))
    );
    toast.success("Producto único editado correctamente");
    closeEditModal();
  }
};


  const handleConfirmDelete = async () => {
    const deleted = await remove(itemToDelete.id);
    if (deleted) {
      setUniqueProducts((prev) => prev.filter((c) => c.id !== itemToDelete.id));
      toast.success("Producto único eliminado correctamente");
      closeDeleteModal();
    }
  };

  return (
    <Container>
      <FormTableManager
        title="Gestión de Productos Únicos"
        formElements={formElements(brands, sizes)}
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
        items={uniqueProducts}
        setItems={setUniqueProducts}
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        item={selectedItem}
        formElements={formElementsEdit(brands, sizes)}
        validationSchema={validationSchema}
        onSave={handleSaveEdit}
        entityLabel="producto único"
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


export default UniqueProductsDashboard;
