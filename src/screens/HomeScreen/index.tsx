import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./Rightpane";
import styled from "styled-components";
import Modal from "../../Components/Modal";
import { ModalContext } from "../../ModalContext/ModalContext";


const HomeScreenContainer = styled.div`
    postition : relative;
    width = 100%
    height : 100vh;
`

const HomeScreen = () => {
  const ModalFeatures = React.useContext(ModalContext)!;
  const isOpen = ModalFeatures.isOpen;

  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
      {isOpen.value === true ? <Modal /> : <></>}
    </HomeScreenContainer>
  );
};

export default HomeScreen;
