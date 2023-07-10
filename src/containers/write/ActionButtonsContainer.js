import React, { useEffect } from "react";
import ActionButtons from "../../components/write/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../redux/modules/write";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getPosts, verifyUser, writePost } from "../../api/api";

const ActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading, isFetching, isError, data } = useQuery("posts", getPosts);

  useEffect(() => {
    console.log(isError);
    console.log(isLoading);
    console.log(isFetching);
    console.log(data);
  }, [data, isError, isFetching, isLoading]);

  const mutation = useMutation(writePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("");
      console.log(data);
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

  const onSubmitHandler = async () => {
    const newPost = {
      title,
      body,
      tags,
    };

    try {
      await verifyUser();
      mutation.mutate(newPost);
      alert("포스팅 완료되었습니다.");
      dispatch(initialize());
    } catch (e) {
      console.log(e);
      alert("인증되지 않은 회원입니다.");
      navigate("login");
    }
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
