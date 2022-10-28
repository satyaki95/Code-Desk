import React, { useContext } from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { ModalContext } from "../context/ModalContext";
import { PlaygroundContext } from "../context/PlaygroundContext";
import EditCardTitle from "./modalTypes/EditCardTitle";
import EditFolderTitle from "./modalTypes/EditFolderTitle";
import NewCard from "./modalTypes/NewCard";
import NewFolder from "./modalTypes/NewFolder";
import NewFolderAndPlayground from "./modalTypes/NewFolderAndPlayground";
import Loading from "./modalTypes/Loading";

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  width: 35%;
  padding: 2rem;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;

  input {
    flex-grow: 1;
    height: 2rem;
  }

  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0 2rem;
  }
`;

export interface ModalProps {
  closeModal: () => void;
  identifer: {
    folderId: string;
    cardId: string;
  };
}

const Modal = () => {
  const ModalFeatures = useContext(ModalContext)!;
  const { closeModal } = ModalFeatures;
  const isOpen = ModalFeatures.isOpen;

  // types
  // 1 -> editCardTitle
  // 2 -> editFolderTitle
  // 3 -> newCard
  // 4 -> newFolder
  // 5 -> newFolderAndPlayground

  return (
    <ModalContainer>
      <ModalContent>
        {isOpen.type === "1" && (
          <EditCardTitle closeModal={closeModal} identifer={isOpen.identifer} />
        )}
        {isOpen.type === "2" && (
          <EditFolderTitle
            closeModal={closeModal}
            identifer={isOpen.identifer}
          />
        )}
        {isOpen.type === "3" && (
          <NewCard closeModal={closeModal} identifer={isOpen.identifer} />
        )}
        {isOpen.type === "4" && (
          <NewFolder closeModal={closeModal} identifer={isOpen.identifer} />
        )}
        {isOpen.type === "5" && (
          <NewFolderAndPlayground
            closeModal={closeModal}
            identifer={isOpen.identifer}
          />
        )}
        {isOpen.type === "6" && <Loading />}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
