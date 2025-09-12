import React, { useState } from 'react';
import * as Yup from 'yup';
import DynamicForm from '../FormComponets/DynamicForm';
import GenericTable from '../Table/GenericTable';
import Divider from '../ContainerAndDivider/Divider';
import EditModal from '../Modal/EditModal';
import { useCrud } from '../hooks/useCrud';
import { useModal } from '../hooks/useModal';
import { usePopup } from '../hooks/usePopup';
import PopUpMessage from '../../shared/components/PopUpMessage/PopUpMessage';

const RoleDashboard = () => {
  const { items, addItem, editItem, deleteItem } = useCrud();
  const { isOpen: isEditOpen, openModal: openEditModal, closeModal: closeEditModal } = useModal();
  const { popup, showPopup, hidePopup } = usePopup();

  const [selectedItem, setSelectedItem] = useState(null);

  const formElements = [
    {
      name: 'nombre',
      label: 'Nombre del Rol',
      type: 'text',
      required: true,
    },
  ];

  const initialValues = { nombre: '' };

  const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
  });

  const handleSubmit = (values, { resetForm }) => {
    try {
      addItem(values);
      showPopup('Rol creado correctamente', 'success');
      resetForm();
    } catch (error) {
      showPopup('Error al crear el rol', 'error');
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    openEditModal();
  };

  const handleSaveEdit = (updatedValues) => {
    editItem(selectedItem.id, updatedValues);
  };

  const handleDelete = (item) => {
    const confirmDelete = window.confirm(`¿Eliminar el rol "${item.nombre}"?`);
    if (confirmDelete) deleteItem(item.id);
  };

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'nombre', label: 'Nombre' },
  ];

  const actions = [
    {
      label: 'Editar',
      onClick: handleEdit,
    },
    {
      label: 'Eliminar',
      onClick: handleDelete,
    },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2>Formulario de creación de rol</h2>

      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />

      <button type="submit" style={{ marginTop: '1rem' }}>
        Crear Rol
      </button>

      {popup.show && (
        <PopUpMessage
          message={popup.message}
          type={popup.type}
          onClose={hidePopup}
        />
      )}

      <Divider />

      <h2>Roles Registrados en el Sistema</h2>

      <GenericTable
        data={items}
        columns={columns}
        actions={actions}
        keyField="id"
      />

      <EditModal
        isOpen={isEditOpen}
        onClose={closeEditModal}
        item={selectedItem}
        formElements={formElements}
        validationSchema={validationSchema}
        onSave={handleSaveEdit}
      />
    </div>
  );
};

export default RoleDashboard;
