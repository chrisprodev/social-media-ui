import React from "react";
import styled from "styled-components";

const SuggestedComunities: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Communities</h2>
        <span>See all</span>
      </Header>
      <Comunities>
        <Community>
          <img src="/hn.png" alt="haker news" />
          HackerNews
        </Community>
        <Community>
          <img src="/dribbble.png" alt="dribbble" />
          Portfolios
        </Community>
        <Community>
          <img src="/react.png" alt="React js" />
          React JS
        </Community>
        <Community>
          <img src="/react_native.png" alt="React Native community" />
          React Native
        </Community>
        <Community>
          <img src="/node.png" alt="Node JS" />
          Node JS
        </Community>
        <Community>
          <img src="/graphql.png" alt="GraphQL" />
          GraphQL
        </Community>
      </Comunities>
    </Container>
  );
};

export default SuggestedComunities;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  span {
    font-size: 1.6rem;
    color: #7090e8;
  }
`;

const Comunities = styled.div`
  margin-top: 1rem;
`;

const Community = styled.span`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 1rem 0;

  img {
    height: 2.6rem;
    width: auto;
    border-radius: 0.4rem;
    margin-right: 1rem;
  }
`;
