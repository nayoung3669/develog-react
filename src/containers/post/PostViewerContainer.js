import React from "react";
import { useQuery } from "react-query";
import PostViewer from "../../components/post/PostViewer";
import { getPosts } from "../../api/api";
import { useParams } from "react-router-dom";

const PostViewerContainer = () => {
  const { data } = useQuery("posts", getPosts, {
    enabled: false, //초기렌더링시에만 실행 (prefetchQuery)
  });
  const { postId } = useParams();
  const post = data.data.filter((post) => post.id === Number(postId));
  const { title, body, tags } = post[0];
  return (
    <div>
      <PostViewer title={title} body={body} tags={tags} />
    </div>
  );
};

export default PostViewerContainer;
