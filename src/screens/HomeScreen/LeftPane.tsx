import React, { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../context/ModalContext";

const StyledLeftPane = styled.div`
  position: fixed;
  width: 40%;
  top: 0;
  left: 0;
  height: 100vh;

  background: #221f20;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 165px;
  margin-bottom: 1rem;
`;

const MainHeading = styled.h1`
  font-size: 2.4rem;
  font-weight: 400;
  color: white;
  margin-bottom: 0.75rem;

  span {
    font-weight: 700;
  }
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: white;
  opacity: 75%;
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const AddNewButton = styled.a`
  padding: 0.25rem 1rem;
  border-radius: 2rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  text-decoration: none;

  span {
    font-weight: 700;
    font-size: 2rem;
  }

  &:hover {
    opacity: 0.9;
  }
`;

const LeftPane = () => {
  const { openModal } = useContext(ModalContext)!;

  return (
    <StyledLeftPane>
      <ContentContainer>
        <Logo src='/logo.png' alt='' />
        <MainHeading>
          <span>Code</span> Deck
        </MainHeading>
        <SubHeading>Code. Compile. Debug.</SubHeading>
        <AddNewButton
          onClick={() => {
            openModal({
              value: true,
              type: "5",
              identifer: {
                folderId: "",
                cardId: "",
              },
            });
          }}
        >
          <span>+</span> Create New Playground
        </AddNewButton>
      </ContentContainer>
    </StyledLeftPane>
  );
};

export default LeftPane;
