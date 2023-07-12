import PostHeader from "../common/PostHeader";
import { styled } from "styled-components";

const PostList = ({ data, onClickHandler }) => {
  return (
    <PostListBlock>
      {data?.map((post) => {
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
