import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./right.scss";
import { faFolderOpen, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";

const RightScreen = () => {
  return (
    <div className="right-container">
      <div className="header">
        <div className="title">
          <span>My</span> Playground
        </div>
        <button className="add-folder">
          <FontAwesomeIcon icon={faPlus} />
          <span>New Folder</span>
        </button>
      </div>
      <div className="folder-container">
        <div className="folder-header">
          <div className="folder-header-item">
            <FontAwesomeIcon icon={faFolderOpen} style={{ color: "#FFD43B" }} />
            <span>{"DSA"}</span>
          </div>
          <div className="folder-header-item">
            <FontAwesomeIcon icon={faTrashCan} className="delete" />
            <FontAwesomeIcon icon={faPenToSquare} className="edit" />
            <button>
              <FontAwesomeIcon icon={faPlus} />
              <span>New Playground</span>
            </button>
          </div>
        </div>
        <div className="cards-container">
          <div className="card">
            <img src="logo.png" alt="" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"Java"}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} className="delete" />
              <FontAwesomeIcon className="edit" icon={faPenToSquare} />
            </div>
          </div>
          <div className="card">
            <img src="logo.png" alt="" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"Java"}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} className="delete" />
              <FontAwesomeIcon className="edit" icon={faPenToSquare} />
            </div>
          </div>
          <div className="card">
            <img src="logo.png" alt="" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"Java"}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} className="delete" />
              <FontAwesomeIcon className="edit" icon={faPenToSquare} />
            </div>
          </div>
          <div className="card">
            <img src="logo.png" alt="" />
            <div className="title-container">
              <span>{"Heap Implementation"}</span>
              <span>Language: {"Java"}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faTrashCan} className="delete" />
              <FontAwesomeIcon className="edit" icon={faPenToSquare} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightScreen;
