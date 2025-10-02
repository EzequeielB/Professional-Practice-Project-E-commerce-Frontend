import React from "react";
import Modal from "./Modal";
import styles from "./styles/DetailsModal.module.css";

const DetailsModal = ({ isOpen, onClose, item, entityLabel }) => {
  if (!item) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.detailsContainer}>
        <h2 className={styles.title}>
          Detalles de {entityLabel || "entidad"}
        </h2>
        <div className={styles.detailsContent}>
          {Object.entries(item).map(([key, value]) => (
            <div key={key} className={styles.detailRow}>
              <strong>{key}:</strong>{" "}
              <span>
                {Array.isArray(value)
                  ? value.join(", ")
                  : typeof value === "boolean"
                  ? value
                    ? "Sí"
                    : "No"
                  : value || "-"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
