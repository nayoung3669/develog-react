import React, { useCallback, useEffect } from "react";
import Editor from "../../components/write/Editor";
import { useDispatch, useSelector } from "react-redux";
import { changeField, initialize } from "../../redux/modules/write";

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const onChangeField = useCallback(
    (payload) => {
      dispatch(changeField(payload));
    },
    [dispatch],
  );

  useEffect(() => {
    return () => dispatch(initialize()); //cleanup: 작성하다가 나가면 clean
  }, [dispatch]);

  return (
    <div>
      <Editor title={title} body={body} onChangeField={onChangeField} />
    </div>
  );
};

export default EditorContainer;
