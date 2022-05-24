import React from "react";
import InputPost from "./InputPost";
import styled from "styled-components";
import PostContent from "./PostContent";
import { postData } from "../constants/posts";

const FeedContainer: React.FC = () => {
  return (
    <Container>
      <InputPost />
      {postData &&
        postData.map((post) => <PostContent {...post} />)}
    </Container>
  );
};

export default FeedContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 57rem);
`;
