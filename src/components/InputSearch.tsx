import React from "react";
import styled from "styled-components";

const InputSearch = () => {
  return (
    <Container>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input type="text" placeholder="Search" />
    </Container>
  );
};

export default InputSearch;
const Container = styled.div`
  background: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;

  svg {
    width: 2rem;
    height: auto;
    color: #676767;
  }

  input[type="text"] {
    border: none;
    outline: none;
    background: transparent;
    margin-left: 1rem;
  }
`;
