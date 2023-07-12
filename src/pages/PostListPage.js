import { useNavigate } from "react-router-dom";
import { Button } from "../common";
import Header from "../components/common/Header";
import PostList from "../components/posts/PostList";

const PostListPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
};

export default PostListPage;
