import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);

  const closeModal = () => {
    setModalType(null);
  };

  

  const modalFeatures = {
    openModal: setModalType,
    closeModal,
    activeModal: modalType,
  };

  return (
    <ModalContext.Provider value={modalFeatures}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
