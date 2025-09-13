import React from "react";
import styles from "./styles/Modal.module.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      className={styles.modalBackground}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.titleCloseBtn}>
          <button onClick={onClose} aria-label="Cerrar modal">X</button>
        </div>

        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}


export default Modal;
