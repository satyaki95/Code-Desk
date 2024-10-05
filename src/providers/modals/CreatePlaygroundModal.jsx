import React, { useContext } from "react";
import "./createPlaygroundModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../ModalProvider";
import { playgroundContext } from "../PlaygroundProvider";

const CreatePlaygroundModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playgroundfeatures = useContext(playgroundContext);

  const closeModal = () => {
    modalFeatures.closeModal();
  };

  const onSubmitModal = (e) => {
    e.preventDefault();
    const folderName = e.target.folderName.value;
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;

    playgroundfeatures.createNewPlayground({
      folderName,
      fileName,
      language
    });
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
        <h1>Create New Playground</h1>

        <div className="item">
          <p>Enter Folder Name</p>
          <input name="folderName" required />
        </div>

        <div className="item">
          <p>Enter Card Name</p>
          <input name="fileName" required />
        </div>

        <div className="item">
          <select name="language">
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>

          <button type="submit">Create Playground</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlaygroundModal;
