import React, { useState } from 'react';
import DynamicForm from './DynamicForm';
import GenericTable from '../Table/GenericTable';
import Divider from '../ContainerAndDivider/Divider';

const FormTableManager = ({
  title = "Gestión",
  formElements,
  initialValues,
  validationSchema,
  columns,
  actions = [],
  keyField = "id"
}) => {
  const [items, setItems] = useState([]);

  const handleSubmit = (values, { resetForm }) => {
    const nuevoItem = {
      [keyField]: items.length + 1,
      ...values,
    };
    setItems([...items, nuevoItem]);
    resetForm();
  };

  const mergedActions = actions.map((action) => ({
    ...action,
    onClick: (item) => action.onClick(item, items, setItems),
  }));

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2>{title}</h2>

      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      />

      <Divider />

      <GenericTable
        data={items}
        columns={columns}
        actions={mergedActions}
        keyField={keyField}
      />
    </div>
  );
};

export default FormTableManager;
