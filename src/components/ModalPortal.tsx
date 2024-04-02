import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function ModalPortal({ children, onClose }: ModalProps) {
  const modalRoot = document.getElementById('portal-root');
  const el = document.createElement('div');
  useEffect(() => {
    if (!modalRoot) return;

    const handleOutsideClick = (event: MouseEvent) => {
      if (!el.contains(event.target as Node)) {
        onClose();
      }
    };

    modalRoot.appendChild(el);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      modalRoot.removeChild(el);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [el, modalRoot, onClose]);

  return ReactDOM.createPortal(
    <div
      className='fixed right-0 top-0 z-50 flex size-full flex-col justify-end bg-black bg-opacity-50'
      onClick={onClose}>
      {children}
    </div>,
    el
  );
}
