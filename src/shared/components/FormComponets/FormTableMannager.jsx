import React from "react";
import DynamicForm from "./DynamicForm";
import GenericTable from "../Table/GenericTable";
import Divider from "../Divider/Divider";

const FormTableManager = ({
  title = "Gestión",
  formElements,
  initialValues,
  validationSchema,
  columns,
  getActions,
  getHandleSubmit,
  keyField = "id",
  items,
  setItems,
}) => {
  const actions = getActions(items, setItems);
  const handleSubmit = getHandleSubmit;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h2>{title}</h2>

      <DynamicForm
        elements={formElements}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, helpers) =>
          handleSubmit(values, { ...helpers, items, setItems })
        }
      />

      <Divider />

      <GenericTable
        data={items}
        columns={columns}
        actions={actions}
        keyField={keyField}
      />
    </div>
  );
};

export default FormTableManager;
