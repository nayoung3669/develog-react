import React from "react";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { getPosts } from "../../api/api";
import { useParams } from "react-router-dom";

const PostViewer = () => {
  const { data } = useQuery("posts", getPosts, {
    enabled: false, //초기렌더링시에만 실행 (prefetchQuery)
  });
  const { postId } = useParams();
  // const post = data.filter((post) => post.id === postId);
  console.log(data);

  return (
    <PostViewerBox>
      <PostHeader>
        <h1 className="title">{`제목 : 제목1`}</h1>
        <div className="date">
          <span className="username">Username</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <div className="tags">{`태그: #태그 #태그 #태그`} </div>
      </PostHeader>
      <PostBody>
        <div
          className="body"
          dangerouslySetInnerHTML={{
            __html: `<p>내용내용내용내용<b>내용내용내용</b>내용내용내용내용내용</p>`,
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
