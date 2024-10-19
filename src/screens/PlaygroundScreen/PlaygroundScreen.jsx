import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./playgroundScreen.scss";
import { faCloudArrowDown, faCloudArrowUp, faFileUpload } from "@fortawesome/free-solid-svg-icons";
const PlaygroundScreen = () => {
  const params = useParams();
  const { fileId, folderId } = params;

  return (
    <div className="playground-container">
      <div className="header-container">
        <div className="header-content">
          <img src="/logo.png" className="logo" />
          <h1>
            <span>Code</span> Desk
          </h1>
        </div>
      </div>
      <div className="content-container">
        <div className="editor-container">Editor Container</div>
        <div className="input-container">
          <div className="input-header">
            <b>Input:</b>
            <label htmlFor="input">
            <FontAwesomeIcon icon={faCloudArrowUp} className="uplode_file" style={{ color: "#63E6BE" }} />
            <span className="">Import input</span>
            </label>
            <input type="file" />
          </div>
          <textarea></textarea>
        </div>
        <div className="output-container">
          <div className="output-header">
            <b>Output:</b>
            <label htmlFor="output">
            <FontAwesomeIcon icon={faCloudArrowDown} className="export_file" style={{ color: "#63E6BE" }} />
            <span className="">Export Output</span>
            </label>
            <button>Export Output</button>
          </div>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundScreen;
