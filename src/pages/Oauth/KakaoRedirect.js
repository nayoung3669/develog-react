import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/modules/user";
import { useNavigate } from "react-router-dom";
import { kakaoLogin } from "../../api/Oauth";
import { kakaoSuccess } from "../../redux/modules/tokens";

const KakaoRedirect = () => {
  const tokens = useSelector((state) => state.tokens);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //인가 코드 추출
  const params = new URL(window.location.href).searchParams.get("code");

  const handleKakao = async () => {
    const response = await kakaoLogin(params);
    console.log(response);
    if (response) {
      //redux에 저장
      // console.log(response.data.token);
      dispatch(kakaoSuccess(response.data.token));
      // console.log(tokens.kakao);

      localStorage.setItem("accessToken", response.data.token);
      dispatch(loginSuccess());
      navigate("/home");
    }
  };

  useEffect(() => {
    handleKakao();
  }, []);

  return <div>KakaoRedirect</div>;
};

export default KakaoRedirect;
