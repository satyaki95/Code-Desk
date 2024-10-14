import React, { useContext } from "react";
import "./createFolderModal.scss";
import "./createPlaygroundModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";

const UpdateFileTitleModal = () => {
  const { closeModal, modalPayload } = useContext(ModalContext);
  const { editFileTitle } = useContext(PlaygroundContext);

  const onSubmitModal = (e) => {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    editFileTitle(fileName, modalPayload.folderId, modalPayload.fileId);
    closeModal();
  };
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitModal}>
        <FontAwesomeIcon
          icon={faClose}
          className="close"
          onClick={closeModal}
        />
        <h1>Update Card Title</h1>
        <div className="inputContaainer">
          <input name="fileName" placeholder="Update File Name" />
          <button type="submit">Update Card Title</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFileTitleModal;
