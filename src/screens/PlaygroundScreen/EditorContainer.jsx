import React from "react";
import "./editorContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faPenToSquare,
  faCloudArrowDown,
  faCloudArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Editor } from "@monaco-editor/react";



const editorOptions = {
  fontSize: 16,
  theme: "vs-dark"
}

const EditorContainer = () => {
  return (
    <div className="root-editor-container">
      <div className="editor-header">
        <div className="editor-left-container">
          <b>{"Title"}</b>
          <FontAwesomeIcon icon={faPenToSquare} className="edit" />
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
      <div className="editor-body">
        <Editor
          height={"100%"}
          language={"javascript"}
          options={editorOptions}
        />
      </div>
      <div className="editor-footer">
        <button>
          <FontAwesomeIcon
            icon={faExpand}
            className="full_screen"
            style={{ color: "#63E6BE" }}
          />
        </button>
        <label htmlFor="import-code">
          <FontAwesomeIcon
            icon={faCloudArrowUp}
            className="import_code"
            style={{ color: "#63E6BE" }}
          />
          <span>Import Code</span>
        </label>
        <input type="file" id="import-code" />
        <button>
          <FontAwesomeIcon
            icon={faCloudArrowDown}
            className="export_code"
            style={{ color: "#63E6BE" }}
          />
          <span>Export Code</span>
        </button>
        <div className="run-code">
          <button>Run Code</button>
        </div>
      </div>
    </div>
  );
};

export default EditorContainer;
