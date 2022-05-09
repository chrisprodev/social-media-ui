import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Wrapper>
      <Container>
        <Menu active={true}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </Menu>
        <Menu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Collaborate
        </Menu>
        <Menu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
          Shows
        </Menu>
        <Menu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Subscriptions
        </Menu>
        <Menu>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.4}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          Favorites
        </Menu>
        <Comunities>
          <Container>
            <h3>
              Your Communities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </h3>
            <Community>
              <img src="/dev_com.png" alt="dev community" />
              Dev Forum
            </Community>
            <Community>
              <img src="/dribbble.png" alt="dribbble" />
              Inspirational Designs
            </Community>
            <Community>
              <img src="/trends.png" alt="treding dev topics" />
              Trending Dev Topics
            </Community>
            <Community>
              <img src="/ux_com.png" alt="ux/ui community" />
              UX/UI Community
            </Community>
          </Container>
        </Comunities>
      </Container>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.div`
  width: 22rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Menu = styled.span<{ active?: boolean }>`
  display: flex;
  font-size: 1.6rem;
  padding: 1rem 1.4rem;
  margin-top: 0.5rem;
  font-weight: 600;
  align-items: center;
  background: ${({ active }) => (active ? "#F1F4FD" : "none")};
  color: ${({ active }) => (active ? "#7A98E9" : "#707070")};
  border-radius: ${({ active }) => (active ? "0.5rem" : "none")};

  svg {
    height: 1.8rem;
    width: auto;
    margin-right: 1rem;
  }
`;

const Comunities = styled.div`
  margin-top: 2rem;
  border-top: solid 2px #f4f4f4;
  padding: 2rem 1rem 0 1rem;

  h3 {
    display: flex;
    justify-content: space-between;
    color: #9b9b9b;
    font-size: 1.6rem;
    text-transform: uppercase;
    font-weight: 600;

    svg {
      cursor: pointer;
      height: 1.6rem;
      width: auto;
    }
  }
`;

const Community = styled.span`
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  margin: 0.7rem 0;

  img {
    height: 2.4rem;
    width: auto;
    border-radius: 0.4rem;
    margin-right: 1rem;
  }
`;
