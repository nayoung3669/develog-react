import React from "react";
import { styled } from "styled-components";
import PostHeader from "../common/PostHeader";
import { Button } from "../../common";
import { useNavigate } from "react-router-dom";

const PostViewer = ({ title, tags, body }) => {
  const navigate = useNavigate();
  // if error : 존재하지 않는 게시글입니다.
  const onClickHandler = () => {
    navigate("/home");
  };

  return (
    <PostViewerBox>
      <div className="goToListBtn">
        <Button w={"110"} h={"35"} onClick={onClickHandler}>
          목록 보기
        </Button>
      </div>
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
  max-width: 900px;
  margin: auto;
  padding: 5rem;
  position: relative;
  .goToListBtn {
    position: absolute;
    right: 9%;
    top: 10%;
  }
`;

const PostBody = styled.div`
  width: 100%;
  padding: 40px 20px;
`;
