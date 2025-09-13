import React from "react";
import Modal from "./Modal";
import styles from "./styles/DeleteModal.module.css";

const DeleteModal = ({ isOpen, onClose, item, onConfirm }) => {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>¿Eliminar rol?</h2>
      <p>
        ¿Estás seguro de que querés eliminar el rol{" "}
        <strong>{item.nombre}</strong>?
      </p>
      <div className={styles.modalActions}>
        <button className={styles.cancel} onClick={onClose}>
          Cancelar
        </button>
        <button className={styles.confirm} onClick={onConfirm}>
          Eliminar
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
