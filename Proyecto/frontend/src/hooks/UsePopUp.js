import { useState } from 'react';

export function usePopup() {
  const [popup, setPopup] = useState({ show: false, message: '', type: '' });

  const showPopup = (message, type = 'success') => {
    setPopup({ show: true, message, type });
  };

  const hidePopup = () => {
    setPopup({ ...popup, show: false });
  };

  return { popup, showPopup, hidePopup };
}
