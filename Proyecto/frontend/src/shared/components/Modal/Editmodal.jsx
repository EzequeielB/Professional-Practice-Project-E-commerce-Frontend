import Modal from "./Modal";
import DynamicForm from "../FormComponets/DynamicForm";

function EditModal({ isOpen, onClose, item, formElements, validationSchema, onSave }) {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Editar elemento</h2>
      <DynamicForm
        elements={formElements}
        initialValues={item}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          onSave(values);
          onClose();
        }}
      />
    </Modal>
  );
}

export default EditModal;
