import Header from "../components/common/Header";
import ActionButtons from "../components/write/ActionButtons";
import Editor from "../components/write/Editor";
import TagBox from "../components/write/TagBox";

const WritePage = () => {
  return (
    <div>
      <Header />
      <Editor />
      <TagBox />
      <ActionButtons />
    </div>
  );
};

export default WritePage;
