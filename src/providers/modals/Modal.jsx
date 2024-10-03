import React, { useContext } from "react";
import { ModalContext } from "../ModalProvider";
import CreatePlaygroundModal from "./CreatePlaygroundModal";

const Modal = () => {
  const modalFeatures = useContext(ModalContext);
  console.log(modalFeatures.activeModal);

  return (
    <>
      {modalFeatures.activeModal === "CREATE_PLAYGROUND" && (
        <CreatePlaygroundModal />
      )}
    </>
  );
};

export default Modal;
