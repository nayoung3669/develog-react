import React from "react";
import { css, styled } from "styled-components";

const PostHeader = ({ title, tags, date, ...props }) => {
  return (
    <PostHeaderBlock hasMargin={props.hasMargin}>
      <div onClick={props.onClick}>
        <h1 className="title">{title}</h1>
        <div className="details">
          <p className="date"> {date}</p>
          <div className="tags">
            {tags?.map((tag) => (
              <p key={tag}>#{tag}</p>
            ))}
          </div>
        </div>
      </div>
    </PostHeaderBlock>
  );
};

export default PostHeader;

const PostHeaderBlock = styled.div`
  border-bottom: 1.3px solid #ccc;
  height: 80px;
  cursor: pointer;

  ${({ hasMargin }) =>
    hasMargin &&
    css`
      margin: 20px 0px;

      border: none;
    `}

  .title {
    font-size: 2.4rem;
    font-weight: bold;
  }
  .details {
    display: column;
    margin-top: 20px;
    letter-spacing: -1.25px;
    color: #707070;
    font-size: 0.85rem;
    .tags {
      margin-top: 5px;
    }
  }
  .username {
    font-weight: bold;
    margin-right: 10px;
  }
`;
