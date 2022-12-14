import React from "react";
import styled from "styled-components";


const Loadinggg = styled.div`
width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items:center;
  justify-content : center;
  background-color: rgba(0, 0, 0, 0.4);
`
const LoaderBackdrop = styled.div`  
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
const LoaderMain = styled.div`
position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-top: 8px solid aliceblue;
  border-right: 8px solid aliceblue;
  border-bottom: 8px solid aliceblue;
  border-left: 8px solid #8c618d;
  border-radius: 50%;

  animation-name: spin;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      border-left:8px solid deeppink;
    }
    
    25%{
      transform: rotate(360deg);
      border-left:8px solid gold;
    }
    
    50%{
      transform:rotate(720deg);
      border-left:8px solid palegreen;
    }
    
    75%{
      transform: rotate(1080deg);
      border-left:8px solid aqua;
    }
  
    100% {
      transform: rotate(1440deg);
      border-left:8px solid deeppink;
    }
  }
`
const LoadText = styled.div`
position:absolute;
top:calc(50% + 35px);
left:calc(50% - 40px);
color:gray;
font-size : 1.2rem;
letter-spacing:0.1em;
`
const Loading = () => {
  return (
    <Loadinggg>
    <LoaderBackdrop>
      <LoaderMain></LoaderMain>
      <LoadText>loading...</LoadText>
    </LoaderBackdrop>
    </Loadinggg>
  );
};

export default Loading;
