import React, { useContext } from "react";
import EditorContainer from "./EditorContainer";
import InputConsole from "./InputConsole";
import Navbar from "./Navbar";
import OutputConsole from "./OutputConsole";
import { useParams } from "react-router-dom";
import { PlaygroundContext } from "../../context/PlaygroundContext";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";
import Modal from "../../components/Modal";

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
  const { isOpen } = useContext(ModalContext)!;

  // access all playgrounds
  const { folders } = useContext(PlaygroundContext)!;
  const { title, language, code } =
    folders[folderId as string].items[playgroundId as string];

  return (
    <div>
      <Navbar />
      <MainApp>
        <EditorContainer
          title={title}
          language={language}
          code={code}
          folderId={folderId as string}
          cardId={playgroundId as string}
        />
        <Consoles>
          <InputConsole />
          <OutputConsole />
        </Consoles>
      </MainApp>
      {isOpen.value === true ? <Modal /> : <></>}
    </div>
  );
};

export default Playground;
