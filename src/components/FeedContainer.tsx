import React from "react";
import InputPost from "./InputPost";
import styled from "styled-components";
import PostContent from "./PostContent";

const FeedContainer: React.FC = () => {
  return (
    <Container>
      <InputPost />
      <PostContent />
    </Container>
  );
};

export default FeedContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 48rem);
`;
