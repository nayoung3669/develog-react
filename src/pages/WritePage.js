import Header from "../components/common/Header";
import ActionButtons from "../components/write/ActionButtons";
import TagBox from "../components/write/TagBox";
import EditorContainer from "../containers/write/EditorContainer";

const WritePage = () => {
  return (
    <div>
      <Header />
      <EditorContainer />
      <TagBox />
      <ActionButtons />
    </div>
  );
};

export default WritePage;
