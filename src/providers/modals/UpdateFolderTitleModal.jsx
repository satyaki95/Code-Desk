import React, { useContext } from "react";
import "./createFolderModal.scss";
import "./createPlaygroundModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../ModalProvider";
import { PlaygroundContext } from "../PlaygroundProvider";

const UpdateFolderTitleModal = () => {
  const { closeModal } = useContext(ModalContext);
  const { editFolderTitle } = useContext(PlaygroundContext);

  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    editFolderTitle(folderName);
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
        <h1>Update Folder Title</h1>
        <div className="inputContaainer">
          <input name="folderName" placeholder="Update Folder Name" />
          <button type="submit">Update Folder Title</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFolderTitleModal;
