import Header from "../components/common/Header";
import ActionButtons from "../components/write/ActionButtons";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";

const WritePage = () => {
  return (
    <div>
      <Header />
      <EditorContainer />
      <TagBoxContainer />
      <ActionButtons />
    </div>
  );
};

export default WritePage;
