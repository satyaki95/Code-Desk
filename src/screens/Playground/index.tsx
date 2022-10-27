import React from 'react'
import { useContext, useState} from 'react'
import EditorContainer from './EditorContainer';
import InputConsole from './InputConsole';
import Navbar from './Navbar';
import OutputConsole from './OutputConsole';
import {useParams} from 'react-router-dom'
import { PlaygroundContext } from '../../ModalContext/PlaygroundContext';
import CodeEditor from './CodeEditor';
import styled from 'styled-components';
import { ModalContext } from '../../ModalContext/ModalContext';
import Modal from '../../Components/Modal';
import { languageMap } from '../../ModalContext/PlaygroundContext';
import { Buffer } from 'buffer';

import axios from 'axios';
import Loading from '../../Components/Modal Types/Loading';


const MainApp = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
height: calc(100vh - 4.5rem);
`
const Consoles = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`

const Playground = (props : any) => {
  const { folderId, playgroundId } = useParams();
  const { isOpen, openModal, closeModal } = useContext(ModalContext)!;
  const { folders, savePlayground } = useContext(PlaygroundContext)!;
  const { title, languages, code } =
    folders[folderId as string].items[playgroundId as string];
    // For loader to work
  const [loader, setLoader] = useState(false);
    // Save code, language and input into the playground
  const [currentCode, setCurrentCode] = useState(code);
  const [currentInput, setCurrentInput] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(languages);
  const [currentOutput, setCurrentOutput] = useState("Your Output Here : ");

  const saveCode = () => {
    savePlayground(
      folderId as string,
      playgroundId as string,
      currentCode,
      currentLanguage
    );
  };


  const encode = (str: string) => {
    return Buffer.from(str, "binary").toString("base64");
  };

  const decode = (str: string) => {
    return Buffer.from(str, "base64").toString();
  };

  const postSubmission = async (language_id: number, source_code: string, stdin: string) => {
    console.log(language_id, source_code, stdin);
    const options = {
      method: 'POST',
      url: 'https://judge0-ce.p.rapidapi.com/submissions',
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '3b34327924msh6dbf3a3f34bdf37p1e917ajsnefb7bec1d88a',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      },
      data: JSON.stringify({
        language_id: language_id,
        source_code: source_code,
        stdin: stdin,
      }),
    };

    const res = await axios.request(options);
    // console.log(res);
    return res.data.token;
  };

  const getOutput: (token: string) => any = async (token: string) => {

    const options = {
      method: 'GET',
      url: 'https://judge0-ce.p.rapidapi.com/submissions/' + token,
      params: {base64_encoded: 'true', fields: '*'},
      headers: {
        'X-RapidAPI-Key': '3b34327924msh6dbf3a3f34bdf37p1e917ajsnefb7bec1d88a',
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    };

    const res = await axios.request(options);
    if (res.data.status_id <= 2) {
      const res2 = await getOutput(token);
      return res2.data;
    }
    return res.data;
  };

 

  const runCode = async () => {
    
    setLoader(true);
    const language_id = languageMap[currentLanguage].id;
    const source_code = encode(currentCode);
    const stdin = encode(currentInput);
    // console.log(language_id, source_code, stdin);

    const token = await postSubmission(language_id, source_code, stdin);

    const res = await getOutput(token);
    console.log(res);
    const status_name = res.status.description;
    const decoded_output = decode(res.stdout ? res.stdout : "");
    const decoded_compile_output = decode(
      res.compile_output ? res.compile_output : ""
    );
    const decoded_stderr = decode(res.stderr ? res.stderr : "");

    let final_output = "";
    if (res.status_id !== 3) {
      if (decoded_compile_output === "") {
        final_output = decoded_stderr;
      } else {
        final_output = decoded_compile_output;
      }
    } else {
      final_output = decoded_output;
    }

    setCurrentOutput(status_name + "\n\n" + final_output);
    setLoader(false);
  };


  return (
    <div>
      {loader && <Loading />}
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