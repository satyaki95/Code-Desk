import React from "react";
import styled from "styled-components";
import { CgExport } from "react-icons/cg";

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
height: 4rem;
background-color: ${(props => props.theme.body)} !important;
  color: ${(props => props.theme.mainHeading)};
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
  color: ${(props => props.theme.mainHeading)};
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
  background : transparent;
  outline:0;
  border : 0;

  svg {
    font-size: 1.5rem;
  }
}
`;
const OutputArea = styled.textarea`
background-color: ${(props => props.theme.body)} !important;
color: ${(props => props.theme.mainHeading)};
  flex-grow: 1;
  padding: 0.25rem;
  padding-top : 0.5rem
`;

interface OutputConsoleProps {
  currentOutput: string;
}

const OutputConsole: React.FC<OutputConsoleProps> = ({ currentOutput }) => {

   // DarkMode Theme

   const darkTheme = React.useContext(DarkModeContext)!;

   let isDarkThemeOn = darkTheme.isDarkModeOn;
   let SetIsDarkThemeOn = darkTheme.setIsDarkModeOn;


     //Export Code Function

  const handleExport = () =>{
    const blob = new Blob([currentOutput], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.download = "New-Document.txt";
    link.href = url;
    link.click();

  }
  return (
    <ThemeProvider theme={isDarkThemeOn ? DarkTheme : LightTheme}>
    <Console>
      <Header>
        Output Console:
        <button onClick={handleExport}>
          <CgExport />
          Export output
        </button>
      </Header>
      <OutputArea value={currentOutput} disabled></OutputArea>
    </Console>
    </ThemeProvider>
  );
}

export default OutputConsole;
