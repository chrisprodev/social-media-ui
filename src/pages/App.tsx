import React from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";

const App: React.FC = () => {
  const reFectch = () => {
    console.log("Refetching...");
  };

  return (
    <Container>
      <TopBar />
    </Container>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
