import React from "react";
import styled from "styled-components";

const SuggestedPeople: React.FC = () => {
  return (
    <Container>
      <Header>
        <h2>Suggested People</h2>
        <span>See all</span>
      </Header>
      <People>
        <Person>
          <img src="/avatars/1.png" alt="" />
          <PersonDetails>
            <span>Oliver Johnson</span>
            <small>@oliverjohnson</small>
          </PersonDetails>
        </Person>
        <Person>
          <img src="/avatars/2.png" alt="dribbble" />
          <PersonDetails>
            <span>Emma Miller</span>
            <small>@emmam</small>
          </PersonDetails>
        </Person>
        <Person>
          <img src="/avatars/3.png" alt="React js" />
          <PersonDetails>
            <span>Sophia Rodriguez</span>
            <small>@sophiarodz</small>
          </PersonDetails>
        </Person>
        <Person>
          <img src="/avatars/7.png" alt="React Native Person" />
          <PersonDetails>
            <span>Henry Wright</span>
            <small>@henrywright</small>
          </PersonDetails>
        </Person>
        <Person>
          <img src="/avatars/9.png" alt="Node JS" />
          <PersonDetails>
            <span>William Green</span>
            <small>@willgreen</small>
          </PersonDetails>
        </Person>
      </People>
    </Container>
  );
};

export default SuggestedPeople;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
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

const PersonDetails = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 1.6rem;
    font-weight: 600;
  }

  small {
    font-size: 1.4rem;
    color: #707070;
  }
`;

const People = styled.div`
  margin-top: 1rem;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  margin: 1.4rem 0 0 0;

  img {
    height: 4rem;
    width: auto;
    border-radius: 0.4rem;
    margin-right: 1rem;
    border-radius: 50%;
  }
`;
