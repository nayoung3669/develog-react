import { useNavigate } from "react-router-dom";
import { Button } from "../common";
import Header from "../components/common/Header";

const PostListPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Button onClick={() => navigate("/write")}>글쓰기</Button>
    </div>
  );
};

export default PostListPage;
