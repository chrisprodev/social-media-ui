import React from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";

const App: React.FC = () => {
  const reFectch = () => {
    console.log("Refetching...");
  };

  return (
    <Container>
      <TopBar />
      <ContentContainer>
        <SideBar />
      </ContentContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 3rem auto 0 auto;
`;
