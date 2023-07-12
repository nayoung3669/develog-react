import { styled } from "styled-components";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import PostListContainer from "../containers/posts/PostListContainer";

const PostListPage = () => {
  return (
    <PostListWrapper>
      <Header />
      <PostListContainer />
      <Footer />
    </PostListWrapper>
  );
};

export default PostListPage;

const PostListWrapper = styled.div`
  height: 100%;
`;
