import React, { useRef, useState } from "react";
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
  wordWrap: "on",
};

const fileExtensionMaping = {
  cpp: "cpp",
  javascript: "js",
  python: "py",
  java: "java",
};

const EditorContainer = (fileId, folderId) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const codeRef = useRef();
  const onChangeCode = (newCode) => {
    codeRef.current = newCode;
  };

  const importCode = (event) => {
    const file = event.target.files[0];
    const fileType = file.type.includes("text");
    if (fileType) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = (value) => {
        const importedCode = value.target.result;
        setCode(importedCode);
      };
    } else {
      alert("Please choose a program file");
    }
  };

  const exportCode = () => {
    const codeValue = codeRef.current?.trim();

    if (!codeValue) {
      alert(`Please Type Some Code`);
    } else {
      const codeBlob = new Blob([codeValue], { type: "text/plain" });
      const downloadUrl = URL.createObjectURL(codeBlob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = `code.${fileExtensionMaping[language]}`;
      link.click();
    }
  };

  const onChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const onChangeTheme = (e) => {
    setTheme(e.target.value);
  };
  return (
    <div className="root-editor-container">
      <div className="editor-header">
        <div className="editor-left-container">
          <b>{"Title"}</b>
          <FontAwesomeIcon icon={faPenToSquare} className="edit" />
          <button>Save Code</button>
        </div>
        <div className="editor-right-container">
          <select onChange={onChangeLanguage} value={language}>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
          </select>

          <select onChange={onChangeTheme} value={theme}>
            <option value="vs-dark">Dark</option>
            <option value="vs-light">Light</option>
          </select>
        </div>
      </div>
      <div className="editor-body">
        <Editor
          height={"100%"}
          language={language}
          options={editorOptions}
          theme={theme}
          value={code}
          onChange={onChangeCode}
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
        <input type="file" id="import-code" onChange={importCode} />
        <button onClick={exportCode}>
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
