import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/api";
import PostHeader from "../common/PostHeader";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const PostList = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("posts", getPosts, {
    enabled: false, //초기렌더링시에만 실행 (prefetchQuery)
  });

  //내림차순 정렬
  const sortedPosts = data?.data.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  useEffect(() => {
    queryClient.prefetchQuery("posts", getPosts);
  }, [queryClient]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error has occured.</div>;
  }

  const onClickHandler = (id) => {
    navigate(`/${id}`);
  };

  return (
    <PostListBlock>
      {sortedPosts?.map((post) => {
        const date = new Date(post.date).toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return (
          <div className="postheader">
            <PostHeader
              key={post.id}
              title={post.title}
              tags={post.tags}
              date={date}
              hasMargin={true}
              onClick={() => onClickHandler(post.id)}
            />
            <div
              className="contents"
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}></div>
          </div>
        );
      })}
    </PostListBlock>
  );
};

export default PostList;

const PostListBlock = styled.div`
  max-width: 780px;
  margin: 70px auto;
  .postheader {
    border-bottom: 1px solid #ccc;
  }
  .contents {
    padding: 20px 0px 65px 10px;
  }
`;
