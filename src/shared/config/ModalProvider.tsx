'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type contextData = {
  showModal: boolean;
  recovery: boolean;
  favoriteShow: boolean;
  setRecovery: any;
  setShowModal: any;
  setFavoriteShow: any;
  ModalsShow: (message: boolean) => void;
};

export const Context = createContext<contextData | null>(null);

export const useModals = () => {
  return useContext(Context);
};

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  function ModalsShow() {
    setShowModal(!showModal);
  }

  const [favoriteShow, setFavoriteShow] = useState<boolean>(false);

  const [recovery, setRecovery] = useState(false);

  useEffect(() => {
    if (showModal == true || favoriteShow == true) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showModal, favoriteShow]);

  return (
    <Context.Provider
      value={{
        ModalsShow,
        showModal,
        setShowModal,
        recovery,
        setRecovery,
        favoriteShow,
        setFavoriteShow,
      }}>
      {children}
    </Context.Provider>
  );
};
