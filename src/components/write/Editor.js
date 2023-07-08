import Quill from "quill";
import { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Input } from "../../common";

const Editor = () => {
  const quillElement = useRef(null);
  const editor = useRef(null);

  useEffect(() => {
    editor.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "오늘 무엇을 배웠나요?",
      modules: { toolbar: toolbarOptions },
    });
  }, []);

  return (
    <EditorBlock>
      <Input ph="제목을 입력하세요." w="80%" h="40px" />
      <div ref={quillElement}></div>
    </EditorBlock>
  );
};

export default Editor;

var toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];

const EditorBlock = styled.div`
  margin: 40px;

  .ql-editor {
    padding: 210px;
    min-height: 400px;
    border: 2px solid lightgray;
    border-radius: 5px;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
  input {
    padding-left: 12px;
    font-size: 1.7rem;
    margin-bottom: 30px;
  }
`;
