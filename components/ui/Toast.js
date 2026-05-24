'use client';
import { useEffect } from 'react';

export default function Toast({ message, type = 'default', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  const icons = { success: '✓', error: '✕', default: 'ℹ' };

  return (
    <div className={`toast ${type}`}>
      <span>{icons[type]}</span>
      {message}
    </div>
  );
}
