import React from "react";
import { styled } from "styled-components";

const PostViewer = () => {
  return (
    <PostViewerBox>
      <PostHeader>
        <h1 className="title">{`제목 : 제목1`}</h1>
        <SubInfo>
          <div className="tags">{`태그: #태그 #태그 #태그`}</div>
        </SubInfo>
      </PostHeader>
      <PostBody>
        <div className="body">{`내용내용내용내용내용내용내용내용내용내용내용내용`}</div>
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
  .tags {
    font-size: 0.9rem;
    color: #414141;
    margin-bottom: 25px;
  }
  border-bottom: 1.3px solid #ccc;
`;

const PostBody = styled.div`
  width: 100%;
  padding: 40px 20px;
`;

const SubInfo = styled.div`
  margin-top: 20px;
`;
