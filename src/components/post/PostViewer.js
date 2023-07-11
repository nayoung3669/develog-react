import React from "react";
import { styled } from "styled-components";

const PostViewer = ({ title, tags, body }) => {
  // if error : 존재하지 않는 게시글입니다.

  return (
    <PostViewerBox>
      <PostHeader>
        <h1 className="title">{title}</h1>
        <div className="date">
          <span className="username">Username</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="tags">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}{" "}
        </div>
      </PostHeader>
      <PostBody>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: `${body}`,
          }}></div>
      </PostBody>
    </PostViewerBox>
  );
};

export default PostViewer;

const PostViewerBox = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 4rem;
`;

const PostHeader = styled.div`
  .title {
    font-size: 2.4rem;
    font-weight: bold;
  }
  .date {
    margin: 30px 0px 0px 5px;
    color: #4e4e4e;
  }
  .tags {
    color: #4e4e4e;
    margin: 8px 0px 35px 5px;
    font-size: 0.9rem;
  }
  .username {
    font-weight: bold;
    margin-right: 10px;
  }
  border-bottom: 1.3px solid #ccc;
`;

const PostBody = styled.div`
  width: 100%;
  padding: 40px 20px;
`;
