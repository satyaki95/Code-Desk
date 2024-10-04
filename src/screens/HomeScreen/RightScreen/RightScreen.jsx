import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";

import "./right.scss";
import { playgroundContext } from "../../../providers/PlaygroundProvider";

const RightScreen = () => {
  const { folders } = useContext(playgroundContext);

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
      {folders?.map((folder, index) => {
        return (
          <div className="folder-container" key={index}>
            <div className="folder-header">
              <div className="folder-header-item">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  style={{ color: "#FFD43B" }}
                />
                <span>{folder?.title}</span>
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
              {folder.files?.map((file, index) => {
                return (
                  <div className="card" key={index}>
                    <img src="logo.png" alt="" />
                    <div className="title-container">
                      <span>{file?.title}</span>
                      <span>Language: {file?.language}</span>
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faTrashCan} className="delete" />
                      <FontAwesomeIcon className="edit" icon={faPenToSquare} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RightScreen;
