import React from "react";
import ActionButtons from "../../components/write/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../redux/modules/write";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts, writePost } from "../../api/api";

const ActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data } = useQuery("posts", getPosts);

  const mutation = useMutation(writePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("");
      console.log(data);
      console.log("succeed");
    },
    onError: () => {
      console.log("error!");
    },
  });

  const { title, body, tags } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
  }));

  const onSubmitHandler = () => {
    const newPost = {
      title,
      body,
      tags,
    };
    mutation.mutate(newPost);
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
