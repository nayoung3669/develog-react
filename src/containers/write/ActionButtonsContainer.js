import React from "react";
import ActionButtons from "../../components/write/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { initialize, writePost } from "../../redux/modules/write";
import { useNavigate } from "react-router-dom";

const ActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, body, tags } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
  }));

  const onSubmitHandler = () => {
    dispatch(writePost({ title, body, tags }));
    alert("포스팅 완료되었습니다.");
    dispatch(initialize());
  };

  const onCancel = () => {
    //작성 취소할것인지 묻기 필요
    navigate("/");
  };

  return (
    <div>
      <ActionButtons onCancel={onCancel} onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default ActionButtonsContainer;
