import React from "react";
import { styled } from "styled-components";
import PostHeader from "../common/PostHeader";

const PostViewer = ({ title, tags, body }) => {
  // if error : 존재하지 않는 게시글입니다.

  return (
    <PostViewerBox>
      <PostHeader title={title} tag={tags} />
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

const PostBody = styled.div`
  width: 100%;
  padding: 40px 20px;
`;
