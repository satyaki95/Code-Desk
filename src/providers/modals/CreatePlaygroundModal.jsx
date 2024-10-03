import React, { useContext } from "react";
import "./createPlaygroundModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../ModalProvider";


const CreatePlaygroundModal = () => {
  const modalFeatures = useContext(ModalContext);
  const closeModal = () => {
    modalFeatures.closeModal();
  };
  return (
    <div className="modal-container">
      <form action="" className="modal-body">
        <FontAwesomeIcon
          icon={faClose}
          className="close"
          onClick={closeModal}
        />
        <h1>Create New Playground</h1>

        <div className="item">
          <p>Enter Folder Name</p>
          <input type="text" />
        </div>

        <div className="item">
          <p>Enter Card Name</p>
          <input type="text" />
        </div>

        <div className="item">
          <select name="" id="">
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>

          <button>Create Playground</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePlaygroundModal;
