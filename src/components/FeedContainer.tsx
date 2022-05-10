import React from "react";
import InputPost from "./InputPost";
import styled from "styled-components";

const FeedContainer: React.FC = () => {
  return (
    <Container>
      <InputPost />
    </Container>
  );
};

export default FeedContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 48rem);
`;
