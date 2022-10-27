import React, { useState } from "react";
import styled  from "styled-components";
import CodeEditor from "./CodeEditor";
import { MdFullscreen } from "react-icons/md";
import { CgImport } from "react-icons/cg";
import { CgExport } from "react-icons/cg";
import { AiTwotoneEdit } from "react-icons/ai";
import Select from "react-select";
import { Console } from "console";
import { ModalContext } from "../../ModalContext/ModalContext";
import { languageMap } from "../../ModalContext/PlaygroundContext";

import {DarkModeContext} from '../../DarkModeContext/DarkModeContext'
import { ThemeProvider } from "styled-components";
import  {DarkTheme, LightTheme} from '../../DarkModeContext/DarkModes'

const StyledEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const UpperToolbar = styled.div`
  background: ${(props => props.theme.body)};
  color: ${(props => props.theme.mainHeading)};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-left : 20px;

  h3 {
    font-size: 1.3rem;
  }

  button {
    color: ${(props => props.theme.mainHeading)};
    background: transparent;
    font-size: 1.3rem;
    margin-top : 6px;
    border: 0;
    outline: 0;
  }
`;

const LowerToolbar = styled.div`
background: ${(props => props.theme.body)};
color: ${(props => props.theme.mainHeading)};
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;

  button, label {
    color: ${(props => props.theme.mainHeading)};
    background: transparent;
    outline: 0;
    border: 0;
    font-size: 1.1 rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    svg {
      font-size: 1.4rem;
    }
  }
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left : 25px;
`;

const RunCodeButton = styled.div`
  padding: 0.8rem 2rem;
  background-color: #0097d7 !important;
  color: white;
  font-weight: 700;
  border-weight: 0.5rem;
  margin-right: 1rem;
  cursor: pointer;
`;
const SaveCodeButton = styled.button`
  padding: 0.5rem 0.8rem;
  text-align : center;
  font-size : 1rem;
  background: ${(props => props.theme.body)};
    color: ${(props => props.theme.mainHeading)};
  font-weight: 700;
  border: 1px solid green;
  margin-right: 0.5rem auto;
  cursor: pointer;
  transition: 0.5s ease;

  &: hover {
    color: white;
    background-color: green !important;
    border: 1px solid green;
  }
`;
const SelectBars = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right : 25px;
  & > div:nth-of-type(1) {
    width: 8rem;
    color: black !important;
  }
  & > div:nth-of-type(2) {
    width: 10rem;
    color: black !important;
  }
`;
interface EditorContainerProps {
  title: string;
  currentLanguage: string;
  currentCode: string;
  setCurrentLanguage: (newLang: string) => void;
  setCurrentCode: (newCode: string) => void;
  folderId: string;
  cardId: string;
  saveCode: () => void;
  runCode: () => void;
}

const EditorContainer: React.FC<EditorContainerProps> = ({
  title,
  currentLanguage,
  currentCode,
  setCurrentLanguage,
  setCurrentCode,
  folderId,
  cardId,
  saveCode,
  runCode,
}) => {
  const { openModal } = React.useContext(ModalContext)!;

  const LanguageOptions = [
    { value: "c++", label: "C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "Javascript" },
  ];

  const ThemeOptions = [
    { value: "duotoneLight", label: "duotoneLight" },
    { value: "duotoneDark", label: "duotoneDark" },
    { value: "xcodeLight", label: "xcodeLight" },
    { value: "xcodeDark", label: "xcodeDark" },
    { value: "okaidia", label: "okaidia" },
    { value: "githubDark", label: "githubDark" },
    { value: "githubLight", label: "githubLight" },
    { value: "darcula", label: "darcula" },
    { value: "bespin", label: "bespin" },
  ];

  const [selectedLang, setSelectedLang] = useState(() => {
    for (let i = 0; i < LanguageOptions.length; i++) {
      if (
        LanguageOptions[i].value.toLowerCase() == currentLanguage.toLowerCase()
      )
        return LanguageOptions[i];
    }
    return LanguageOptions[0];
  });
  const [selectedTheme, setSelectedTheme] = useState({
    value: "githubDark",
    label: "githubDark",
  });

  function handleLanguageChange(selectedOption: any) {
    setSelectedLang(selectedOption);
    setCurrentLanguage(selectedOption.value);
    setCurrentCode(languageMap[selectedOption.value].defaultCode);
  }
  function handleThemeChange(selectedOption: any) {
    setSelectedTheme(selectedOption);
  }

  const getFile = (e: any) => {
    const input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
  };
  const placeFileContent = (file: any) => {
    readFileContent(file)
      .then((content) => {
        setCurrentCode(content as string);
      })
      .catch((error) => console.log(error));
  };

  function readFileContent(file: any) {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (event) => resolve(event!.target!.result);
      reader.onerror = (error) => reject(error);
      reader.readAsText(file);
    });
  }
  // Full Screen for code editor
  const [fullScreen, setFullScreen] = useState(false);

  function handleFullScreen(){
    setFullScreen(!fullScreen);
  }

  // DarkTheme Functionality

  const darkTheme = React.useContext(DarkModeContext)!;

  let isDarkThemeOn = darkTheme.isDarkModeOn;
  let SetIsDarkThemeOn = darkTheme.setIsDarkModeOn;

  function changeTheme(){
    SetIsDarkThemeOn(!isDarkThemeOn);
    console.log("Clicked");
  }
  console.log(isDarkThemeOn);
  

  return (
    <ThemeProvider theme={isDarkThemeOn ? DarkTheme : LightTheme}>


    <StyledEditorContainer>
      <UpperToolbar>
        <Title>
          <h3>{title}</h3>
          <button
            onClick={() => {
              openModal({
                value: true,
                type: "1",
                identifier: {
                  folderId: folderId,
                  cardId: cardId,
                },
              });
            }}
          >
            <AiTwotoneEdit />
          </button>
        </Title>
        <SelectBars>
          <SaveCodeButton
          onClick={() => {
            saveCode();
          }}
          >Save Code</SaveCodeButton>
          <Select
            value={selectedLang}
            onChange={handleLanguageChange}
            options={LanguageOptions}
          />
          <Select
            value={selectedTheme}
            onChange={handleThemeChange}
            options={ThemeOptions}
          />
        </SelectBars>
      </UpperToolbar>

      <CodeEditor
        currentLanguage={selectedLang.value}
        currentTheme={selectedTheme.value}
        currentCode={currentCode}
        setCurrentCode={setCurrentCode}
        fullScreen = {fullScreen}
      />

      <LowerToolbar>
        <ButtonGroup>
          <button>
            <MdFullscreen onClick={() =>handleFullScreen()}/>
            Full Screen
          </button>
          <label>
            <input
              type='file'
              accept='.txt'
              style={{ display: "none" }}
              onChange={(e) => {
                getFile(e);
              }}/><CgImport /> Import Code
          </label>
          <button>
            <CgExport />
            Export Icon
          </button>
        </ButtonGroup>
        <RunCodeButton  
          onClick={() => {
            runCode();
          }}
          >Run Code</RunCodeButton>
      </LowerToolbar>
    </StyledEditorContainer>
    </ThemeProvider>
  );
};

export default EditorContainer;
