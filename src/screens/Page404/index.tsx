import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;

const ContentContainer = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }
`;

const Page404 = () => {
  // initialize useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // redirect to home page
      navigate("/");
    }, 3000);
  });

  return (
    <PageContainer>
      <ContentContainer>
        <h1>Oops, Page not found.</h1>
        <p>Redirecting to Home!</p>
      </ContentContainer>
    </PageContainer>
  );
};

export default Page404;
