import React from "react";
import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { ModalContext } from "../ModalContext/ModalContext";
import { PlaygroundContext } from "../ModalContext/PlaygroundContext";
import EditCardTitle from "./Modal Types/EditCardTitle";
import EditFolderTitle from "./Modal Types/EditFolderTitle";
import NewCard from "./Modal Types/NewCard";
import NewFolder from "./Modal Types/NewFolder";
import NewFolderAndPlayground from "./Modal Types/NewFolderAndPlayground";
import Loading from "./Modal Types/Loading";

export const ModalContainerStyles = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 30%;
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
  font-size: 1.2rem;
  cursor: pointer;
`;

export const Input = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding 1.5rem 0;
    gap : 1rem;
    padding-botton : 0px;
  input{
    flex-grow : 1;
    height : 2rem

  }
  button{
    background-color : #241f21;
    height: 2rem;
    color : white;
    cursor : pointer;
    padding: 0 1rem;
  }
`;

const EditModal = ({ closeModal, isOpen }: { closeModal: () => void, isOpen : any }) => {
  const PlaygroundFeatures = React.useContext(PlaygroundContext)!;
  const folders = PlaygroundFeatures.folders;
  console.log(folders);

  const currentFolder = folders[isOpen.identifier.folderId];
  console.log(currentFolder.items);
  const currentCard = currentFolder.items[isOpen.identifier.cardId];

  return (
    <>
      <Header>
        <h2 className='Heading'>Edit Cards Title</h2>
        <CloseButton
          onClick={() => {
            closeModal();
          }}
        >
          <RiCloseFill />
        </CloseButton>
      </Header>
      <Input>
        <input type='text' value={currentCard.title} />
        <button>Update Title</button>
      </Input>
    </>
  );
};

export interface Modalprops {
  closeModal : () => void;
  identifier : {
    folderId : string;
    cardId : string;
  }
}

function Modal() {
  const ModalFeatures = React.useContext(ModalContext)!;
  const {closeModal} = ModalFeatures;
  const isOpen = ModalFeatures.isOpen;
  return (
    <ModalContainerStyles>
      <ModalContent>
        {isOpen.type === "1" && <EditCardTitle closeModal = {closeModal} identifier = {isOpen.identifier} />}
        {isOpen.type === "2" && <EditFolderTitle closeModal = {closeModal} identifier = {isOpen.identifier} />}
        {isOpen.type === "3" && <NewCard closeModal = {closeModal} identifier = {isOpen.identifier} />}
        {isOpen.type === "4" && <NewFolder closeModal = {closeModal} identifier = {isOpen.identifier} />}
        {isOpen.type === "5" && <NewFolderAndPlayground closeModal = {closeModal} identifier = {isOpen.identifier} />}
        
      </ModalContent>
    </ModalContainerStyles>
  );
}

export default Modal;
