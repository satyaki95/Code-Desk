import React from "react";
import styled from "styled-components";
import { BiExport } from "react-icons/bi";

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

const OutputArea = styled.textarea`
  background: #e7e7e7;
  flex-grow: 1;
  padding: 0.25rem;
  padding-top: 0.5rem;
  font-size: 1.1rem;
  font-style: italic;
`;

interface OutputConsoleProps {
  currentOutput: string;
}

const OutputConsole: React.FC<OutputConsoleProps> = ({ currentOutput }) => {
  return (
    <Console>
      <Header>
        Output:
        {/* <button>
          <BiExport />
          Export Output
        </button> */}
      </Header>
      <OutputArea value={currentOutput} disabled></OutputArea>
    </Console>
  );
};

export default OutputConsole;
