import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./playgroundScreen.scss";
import {
  faCloudArrowDown,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import EditorContainer from "./EditorContainer";
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
        <div className="editor-container">
          <EditorContainer />
        </div>
        <div className="input-output-container">
          <div className="input-output-header">
            <b>Input :</b>
            <label htmlFor="input" className="icon-container">
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                className="uplode_file"
                style={{ color: "#63E6BE" }}
              />
              <span className=""> Import input</span>
            </label>
            <input type="file" id="input" />
          </div>
          <textarea></textarea>
        </div>
        <div className="input-output-container">
          <div className="input-output-header">
            <b>Output :</b>
            <button className="icon-container">
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                className="export_file"
                style={{ color: "#63E6BE" }}
              />
              <span className=""> Export Output</span>
            </button>
          </div>
          <textarea readOnly></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundScreen;
