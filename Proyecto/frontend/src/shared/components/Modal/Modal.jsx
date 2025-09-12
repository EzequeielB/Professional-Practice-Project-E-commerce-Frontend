// Modal.jsx
import React from "react";
import styles from "./Modal.module.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalBackground} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.titleCloseBtn}>
          <button onClick={onClose}>X</button>
        </div>

        <div className={styles.modalContent}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
