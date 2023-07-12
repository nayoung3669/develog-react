import React, { useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getPosts } from "../../api/api";
import { useNavigate } from "react-router-dom";
import PostList from "../../components/posts/PostList";

const PostListContainer = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery("posts", getPosts, {
    enabled: false, //초기렌더링시에만 실행 (prefetchQuery)
  });

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
    <div>
      <PostList data={sortedPosts} onClickHandler={onClickHandler} />
    </div>
  );
};

export default PostListContainer;
