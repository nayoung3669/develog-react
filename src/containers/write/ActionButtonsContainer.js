import React, { useEffect } from "react";
import ActionButtons from "../../components/write/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../redux/modules/write";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import { getPosts, writePost } from "../../api/api";

const ActionButtonsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery("posts", getPosts);
  }, [queryClient]);

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
      date: new Date(),
    };

    try {
      await writePost(newPost);
      alert("포스팅 완료되었습니다.");
      dispatch(initialize());
      // navigate(`/${dataLength}`);
      navigate("/home");
    } catch (e) {
      console.log(e);
      alert("다시 로그인 해주세요.");
      navigate("/login");
    }
  };

  const onCancel = () => {
    //작성 취소할것인지 묻기 필요
    navigate("/home");
  };

  return (
    <div>
      <ActionButtons onCancel={onCancel} onSubmitHandler={onSubmitHandler} />
    </div>
  );
};

export default ActionButtonsContainer;
