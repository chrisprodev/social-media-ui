import React from "react";
import styled from "styled-components";
import { Post } from "../models/post";

const PostContent: React.FC<Post> = ({
  img,
  username,
  nickname,
  postBody,
  hashtags,
  likes,
  comments,
  fav,
}) => {
  return (
    <Container>
      <img src={img} alt="" />
      <ContentWrapper>
        <ContentHeader>
          <h4>{username}</h4>
          <small>{nickname}</small>
        </ContentHeader>
        <ContentBody>
          <p>{postBody}</p>
          <Hashtags>{hashtags}</Hashtags>
        </ContentBody>
        <Interactions>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            {likes}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            {comments}
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            {fav}
          </span>
        </Interactions>
      </ContentWrapper>
    </Container>
  );
};

export default PostContent;

const Container = styled.article`
  margin-top: 2rem;
  display: flex;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
`;

const ContentWrapper = styled.div`
  margin-left: 1.4rem;
`;

const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.6rem;

  h4 {
    margin: 0;
    font-size: 1.8rem;
  }

  small {
    margin-left: 0.5rem;
    font-size: 1.6rem;
    color: #707070;
  }
`;

const ContentBody = styled.div`
  p {
    white-space: pre-line;
    line-height: 1.5;
    font-size: 1.8rem;
    margin: 2rem 0 0 0;
  }
`;

const Hashtags = styled.p`
  color: var(--main);
`;

const Interactions = styled.div`
  display: flex;
  margin-top: 2rem;
  border-bottom: solid 2px #f4f4f4;
  padding-bottom: 2rem;

  span {
    display: flex;
    align-items: center;
    margin-right: 3rem;
    font-size: 2rem;
    color: #707070;

    svg {
      height: 2rem;
      width: auto;
      margin-right: 1rem;
    }
  }
`;
