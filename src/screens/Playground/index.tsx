import React, { useState, useContext } from "react";
import EditorContainer from "./EditorContainer";
import InputConsole from "./InputConsole";
import Navbar from "./Navbar";
import OutputConsole from "./OutputConsole";
import { useParams } from "react-router-dom";
import {
  languageMap,
  PlaygroundContext,
} from "../../context/PlaygroundContext";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import Modal from "../../components/Modal";
import { Buffer } from "buffer";
import axios from "axios";

const MainApp = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: calc(100vh - 4.5rem);
`;

const Consoles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;

const Playground = () => {
  const { folderId, playgroundId } = useParams();

  // access isOpen field
  const { isOpen, openModal, closeModal } = useContext(ModalContext)!;

  // access all playgrounds
  const { folders, savePlayground } = useContext(PlaygroundContext)!;
  const { title, language, code } =
    folders[folderId as string].items[playgroundId as string];

  const [currentCode, setCurrentCode] = useState(code);
  const [currentInput, setCurrentInput] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [currentOutput, setCurrentOutput] = useState("");

  // save our code
  // we need currentCode, currentLanguage
  const saveCode = () => {
    savePlayground(
      folderId as string,
      playgroundId as string,
      currentCode,
      currentLanguage
    );
  };

  // encode function => converts normal string to base64 encoded string
  const encode = (str: string) => {
    // return encoded string
    return Buffer.from(str, "binary").toString("base64");
  };

  const decode = (str: string) => {
    // return encoded string
    return Buffer.from(str, "base64").toString();
  };

  const postSubmission = async (
    language_id: number,
    source_code: string,
    stdin: string
  ) => {
    // we will make api call
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "de1a555803msh9797095047e2545p188369jsn58f8948f2a2a",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: JSON.stringify({
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
      }),
    };

    // call the api
    const res = await axios.request(options);
    return res.data.token;
  };

  const getOutput: (token: string) => any = async (token: string) => {
    // we will make api call
    const options = {
      method: "GET",
      url: "https://judge0-ce.p.rapidapi.com/submissions/" + token,
      params: { base64_encoded: "true", fields: "*" },
      headers: {
        "X-RapidAPI-Key": "de1a555803msh9797095047e2545p188369jsn58f8948f2a2a",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };

    // call the api
    const res = await axios.request(options);
    if (res.data.status_id <= 2) {
      const res2 = await getOutput(token);
      return res2.data;
    }
    return res.data;
  };

  const runCode = async () => {
    // set loading to true
    // open loading modal
    openModal({
      value: true,
      type: "6",
      identifer: {
        folderId: "",
        cardId: "",
      },
    });

    const language_id = languageMap[currentLanguage].id;
    const source_code = encode(currentCode);
    const stdin = encode(currentInput);

    // pass these things to our api
    const token = await postSubmission(language_id, source_code, stdin);

    // first part is now complete
    // moving to the second part now
    const res = await getOutput(token);
    const status_name = res.status.description;
    const decoded_output = decode(res.stdout ? res.stdout : "");
    const decoded_compile_output = decode(
      res.compile_output ? res.compile_output : ""
    );
    const decoded_stderr = decode(res.stderr ? res.stderr : "");

    let final_output = "";
    if (res.status_id !== 3) {
      // our code has some error
      if (decoded_compile_output === "") {
        final_output = decoded_stderr;
      } else {
        final_output = decoded_compile_output;
      }
    } else {
      final_output = decoded_output;
    }

    setCurrentOutput(status_name + "\n\n" + final_output);
    // set loading to false
    closeModal();
  };

  return (
    <div>
      <Navbar />
      <MainApp>
        <EditorContainer
          title={title}
          currentLanguage={currentLanguage}
          currentCode={currentCode}
          setCurrentCode={setCurrentCode}
          setCurrentLanguage={setCurrentLanguage}
          folderId={folderId as string}
          cardId={playgroundId as string}
          saveCode={saveCode}
          runCode={runCode}
        />
        <Consoles>
          <InputConsole
            currentInput={currentInput}
            setCurrentInput={setCurrentInput}
          />
          <OutputConsole currentOutput={currentOutput} />
        </Consoles>
      </MainApp>
      {isOpen.value === true ? <Modal /> : <></>}
    </div>
  );
};

export default Playground;
