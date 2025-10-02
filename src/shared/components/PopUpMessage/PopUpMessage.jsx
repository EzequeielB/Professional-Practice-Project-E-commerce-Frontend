import React from 'react';
import styles from './PopUpMessage.module.css';

function PopUpMessage({ message, type = 'success', onClose }) {
  return (
    <div className={`${styles.popup} ${styles[type]}`}>
      <span>{message}</span>
      <button onClick={onClose} className={styles.closeBtn}>×</button>
    </div>
  );
}

export default PopUpMessage;
