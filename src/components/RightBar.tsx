import React from "react";
import styled from "styled-components";
import SuggestedComunities from "./SuggestedComunities";
import SuggestedPeople from "./SuggestedPeople";

const RightBar: React.FC = () => {
  return (
    <Wrapper>
      <SuggestedComunities />
      <SuggestedPeople />
    </Wrapper>
  );
};

export default RightBar;

const Wrapper = styled.div`
  width: 22rem;
`;
