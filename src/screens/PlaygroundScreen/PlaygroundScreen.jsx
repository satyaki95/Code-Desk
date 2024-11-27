import React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./playgroundScreen.scss";
import {
  faCloudArrowDown,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import EditorContainer from "./EditorContainer";
import { useState } from "react";

const PlaygroundScreen = () => {
  const params = useParams();
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const { fileId, folderId } = params;

  const importInput = (e) => {
    const file = e.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
        setInput(event.target.result);
      };
    }
  };

  const exportOutput = () => {
    const blob = new Blob([output], {
      type: "text/plain",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "output.txt";
    link.click();
  };

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
          <EditorContainer fileId={fileId} folderId={folderId} />
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
            <input type="file" id="input" onChange={importInput} />
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="input-output-container">
          <div className="input-output-header">
            <b>Output :</b>
            <button className="icon-container" onClick={exportOutput}>
              <FontAwesomeIcon
                icon={faCloudArrowDown}
                className="export_file"
                style={{ color: "#63E6BE" }}
              />
              <span className=""> Export Output</span>
            </button>
          </div>
          <textarea readOnly value={output}></textarea>
        </div>
      </div>
    </div>
  );
};

export default PlaygroundScreen;
