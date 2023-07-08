import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { styled } from "styled-components";
import { Input } from "../../common";

const Editor = () => {
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ size: ["small", false, "large", "huge"] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
    ],
  };

  return (
    <EditorBlock>
      <Input ph="제목을 입력하세요." w="80%" h="40px" />
      <ReactQuill
        modules={modules}
        placeholder="내용을 작성하세요."></ReactQuill>
    </EditorBlock>
  );
};

export default Editor;

const EditorBlock = styled.div`
  margin: 20px 40px 10px 40px;
  .ql-editor {
    min-height: 380px;
  }
  .ql-editor.ql-blank::before {
    left: 20px;
  }
  input {
    padding-left: 12px;
    font-size: 1.7rem;
    margin-bottom: 15px;
  }
`;
