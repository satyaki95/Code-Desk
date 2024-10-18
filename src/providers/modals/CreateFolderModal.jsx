import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./createFolderModal.scss";
import "./createPlaygroundModal.scss";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";

const CreateFolderModal = () => {
    const modalFeatures = useContext(ModalContext);
    const {createNewFolder} = useContext(PlaygroundContext);

    const closeModal = () => {
        modalFeatures.closeModal();
    }

    const onSubmitModal = (e) => {
        e.preventDefault();
        const folderName = e.target.folderName.value;
        createNewFolder(folderName);
        closeModal();
    }


  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <FontAwesomeIcon icon={faClose} className="close" onClick={closeModal} />
        <h1>Create New Folder</h1>
        <div className="inputContaainer">
          <input name="folderName" placeholder="Enter Folder Name" />
          <button type="submit">Create New Playground</button>
        </div>
      </form>
    </div>
  );
};

export default CreateFolderModal;
