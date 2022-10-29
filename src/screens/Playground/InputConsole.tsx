import React from "react";
import styled from "styled-components";
import { CgImport } from "react-icons/cg";

import {DarkModeContext} from '../../DarkModeContext/DarkModeContext'
import { ThemeProvider } from "styled-components";
import  {DarkTheme, LightTheme} from '../../DarkModeContext/DarkModes'

const Console = styled.div`
  background-color: ${(props => props.theme.body)} !important;
  color: ${(props => props.theme.mainHeading)};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  background-color: ${(props => props.theme.body)} !important;
  color: ${(props => props.theme.mainHeading)};
  height: 4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.25rem;
  font-weight: 700;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    background : transparent;
    color: ${(props => props.theme.mainHeading)};
    outline:0;
    border : 0;

    svg {
      font-size: 1.5rem;
    }
    label{
      span{
        position : relative;
        top : -4px;
        right : -3px;
      }
    }
    
  }
`;

const TextArea = styled.textarea`
background-color: ${(props => props.theme.body)} !important;
  color: ${(props => props.theme.mainHeading)};
  flex-grow: 1;
  resize: none;
  border: 0;
  outline: 0;
  padding: 0.5rem;
  padding-top : 0.5rem

`;

interface InputConsoleProps {
  currentInput: string;
  setCurrentInput: (newInput: string) => void;
}

const InputConsole: React.FC<InputConsoleProps> = ({
  currentInput,
  setCurrentInput,
}) => {

  // DarkMode Theme

  const darkTheme = React.useContext(DarkModeContext)!;

  let isDarkThemeOn = darkTheme.isDarkModeOn;
  let SetIsDarkThemeOn = darkTheme.setIsDarkModeOn;

  //inport code

  const getFile = (e: any) => {
    const input = e.target;
    if ("files" in input && input.files.length > 0) {
      placeFileContent(input.files[0]);
    }
  };
  const placeFileContent = (file: any) => {
    readFileContent(file)
      .then((content) => {
        setCurrentInput(content as string);
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

  return (
    <ThemeProvider theme={isDarkThemeOn ? DarkTheme : LightTheme}>

    <Console>
      <Header>
        Input Console:
        <button>
        <label>
            <input
              type='file'
              accept='.txt'
              style={{ display: "none" }}
              onChange={(e) => {
                getFile(e);
              }}/>
              <CgImport />
              <span>Import Code</span> 
          </label>
        </button>
      </Header>
      <TextArea
      value={currentInput}
      onChange={(e) => {
        setCurrentInput(e.target.value);
      }}
      ></TextArea>
    </Console>
    </ThemeProvider>
  );
}

export default InputConsole;
