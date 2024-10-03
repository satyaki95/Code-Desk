import React, { useContext } from "react";
import "./left.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { ModalContext } from "../../../providers/ModalProvider";

const LeftScreen = () => {
  const modalFeatures = useContext(ModalContext);
  const openCreatePlaygroundModal = () => {
    modalFeatures.openModal("CREATE_PLAYGROUND");
  };
  return (
    <div className="left-container">
      <div className="items-container">
        <img src="logo.png" alt="" />
        <h1>CODE DESK</h1>
        <h2>Code. Compile. Debug.</h2>
        <button onClick={openCreatePlaygroundModal}>
          <FontAwesomeIcon icon={faPlus} className="plus" />
          <span>Create Playground</span>
        </button>
      </div>
    </div>
  );
};

export default LeftScreen;
