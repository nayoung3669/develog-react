import Header from "../components/common/Header";
import ActionButtonsContainer from "../containers/write/ActionButtonsContainer";
import EditorContainer from "../containers/write/EditorContainer";
import TagBoxContainer from "../containers/write/TagBoxContainer";

const WritePage = () => {
  return (
    <div>
      <Header />
      <EditorContainer />
      <TagBoxContainer />
      <ActionButtonsContainer />
    </div>
  );
};

export default WritePage;
