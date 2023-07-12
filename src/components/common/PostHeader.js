import React from "react";
import { css, styled } from "styled-components";

const PostHeader = ({ title, tags, ...props }) => {
  return (
    <PostHeaderBlock hasMargin={props.hasMargin}>
      <div onClick={props.onClick}>
        <h1 className="title">{title}</h1>
        <div className="tags">
          {tags?.map((tag) => (
            <p key={tag}>#{tag}</p>
          ))}
        </div>
      </div>
    </PostHeaderBlock>
  );
};

export default PostHeader;

const PostHeaderBlock = styled.div`
  border-bottom: 1.3px solid #ccc;
  ${({ hasMargin }) =>
    hasMargin &&
    css`
      margin: 20px 0px;

      border: none;
    `}
  cursor: pointer;

  .title {
    font-size: 2.4rem;
    font-weight: bold;
  }
  .date {
    margin: 30px 0px 0px 5px;
    color: #4e4e4e;
  }
  .tags {
    display: flex;
    gap: 8px;
    letter-spacing: -1px;
    color: #707070;
    margin: 8px 0px 35px 5px;
    font-size: 0.9rem;
  }
  .username {
    font-weight: bold;
    margin-right: 10px;
  }
`;
