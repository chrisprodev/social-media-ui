import React from "react";
import styled from "styled-components";
import RightBar from "../components/RightBar";
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
        <RightBar />
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  margin: 3rem auto 0 auto;
`;
