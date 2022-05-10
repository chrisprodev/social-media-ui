import React from "react";
import styled from "styled-components";

const InputPost: React.FC = () => {
  return (
    <Container>
      <textarea placeholder="Share your knowledge..." />
    </Container>
  );
};

export default InputPost;

const Container = styled.div`
  background: #f7f7f7;
  height: 8.4rem;
  border-radius: 1rem;
  padding: 1.6rem;

  textarea {
    outline: none;
    border: none;
    background: transparent;
    resize: none;
    width: 100%;
    height: 100%;
  }
`;
