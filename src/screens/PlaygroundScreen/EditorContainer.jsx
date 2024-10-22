import React from "react";
import "./editorContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const EditorContainer = () => {
  return (
    <div className="root-editor-container">
      <div className="editor-header">
        <div className="editor-left-container">
          <b>{"Title"}</b>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit"
          />
          <button>Save Code</button>
        </div>
        <div className="editor-right-container">
        <select name="language">
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>

          <select>
            <option value="vs-dark">Dark</option>
            <option value="vs-light">Light</option>
          </select>
        </div>
      </div>
      <div className="editor-body">body</div>
      <div className="editor-footer">footer</div>
    </div>
  );
};

export default EditorContainer;
