import { useState, useRef } from 'react';

export function usePopup(autoHideMs = 3000) {
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });
  const timerRef = useRef(null);

  const showPopup = (message, type = 'success', autoHide = true) => {
    setPopup({ show: true, message, type });
    if (autoHideMs && autoHide) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setPopup(p => ({ ...p, show: false }));
      }, autoHideMs);
    }
  };

  const hidePopup = () => {
    clearTimeout(timerRef.current);
    setPopup(p => ({ ...p, show: false }));
  };

  return { popup, showPopup, hidePopup };
}
