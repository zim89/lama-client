'use client';
import { createContext, useContext, useState } from 'react';

type contextData = {
  showModal: boolean;
  recovery: boolean;
  setRecovery: any;
  setShowModal: any;
  ModalsShow: (message: boolean) => void;
};

export const Context = createContext<contextData | null>(null);

export const useModals = () => {
  return useContext(Context);
};

export const ModalsProvider = ({ children }: { children: React.ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  function ModalsShow() {
    setShowModal(!showModal);
  }

  const [recovery, setRecovery] = useState(false);
  return (
    <Context.Provider
      value={{ ModalsShow, showModal, setShowModal, recovery, setRecovery }}>
      {children}
    </Context.Provider>
  );
};
