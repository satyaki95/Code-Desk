import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./createPlaygroundModal.scss";
import { ModalContext } from "../ModalProvider";
import { defaultCode, PlaygroundContext } from "../PlaygroundProvider";
import { v4 } from "uuid";

const CreateCardModal = () => {
  const modalFeatures = useContext(ModalContext);
  const { createPlayground } = useContext(PlaygroundContext);

  const closeModal = () => {
    modalFeatures.closeModal();
  };

  const onSubmitModal = (e) => {
    e.preventDefault();
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;

    const file = {
      id: v4(),
      title: fileName,
      language,
      code: defaultCode[language],
    };

    createPlayground(modalFeatures.modalPayload, file);
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
        <p>Enter Card Name</p>
          <input name="fileName" placeholder="Enter Card Title" required />
        </div>

        <div className="item">
          <select name="language" required>
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

export default CreateCardModal;
