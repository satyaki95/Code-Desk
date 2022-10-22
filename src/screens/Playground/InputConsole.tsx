import React from "react";
import styled from "styled-components";
import { BiImport } from "react-icons/bi";

const Console = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  height: 4rem;
  background: #ededed;
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
    gap: 0.4rem;
    font-size: 1rem;
    font-weight: 400;
    background: transparent;
    outline: 0;
    border: 0;

    svg {
      font-size: 1.5rem;
    }
  }
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  resize: none;
  border: 0;
  outline: 0;
  font-size: 1.1rem;
  padding: 0.25rem;
  padding-top: 0.5rem;
`;

interface InputConsoleProps {
  currentInput: string;
  setCurrentInput: (newInput: string) => void;
}

const InputConsole: React.FC<InputConsoleProps> = ({
  currentInput,
  setCurrentInput,
}) => {
  return (
    <Console>
      <Header>
        Input:
        {/* <button>
          <BiImport />
          Import Input
        </button> */}
      </Header>
      <TextArea
        value={currentInput}
        onChange={(e) => {
          setCurrentInput(e.target.value);
        }}
      ></TextArea>
    </Console>
  );
};

export default InputConsole;
