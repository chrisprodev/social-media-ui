import React from "react";
import styled from "styled-components";
import InputSearch from "./InputSearch";

const TopBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <InputSearch />
        <RightContent>
          <ButtonSecondary role="button">
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
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            Get Invite Codes
          </ButtonSecondary>
          <ButtonPrimery role="button">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create
          </ButtonPrimery>
          <IconsContainer>
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
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <span />
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </IconsContainer>
        </RightContent>
      </Wrapper>
    </Container>
  );
};

export default TopBar;

const Container = styled.nav`
  padding: 1rem 0;
  border-bottom: solid 2px #f4f4f4;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ButtonSecondary = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: solid 2px #f8f8f8;
  background: #fff;
  border-radius: 0.5rem;

  svg {
    color: #666666;
    height: 1.6rem;
    width: auto;
    margin-right: 1rem;
  }
`;

const ButtonPrimery = styled.button`
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  background: #7090e8;
  border-radius: 0.5rem;
  color: #fff;

  svg {
    height: 1.6rem;
    width: auto;
    margin-right: 1rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2rem;

  span {
    background: #828282;
    width: 1px;
    height: 2.4rem;
    border-radius: 1px;
    margin: 0 2rem;
  }

  svg {
    color: #666666;
    height: 2.2rem;
    width: auto;
  }
`;
