import React from "react";
import styled from "styled-components";
import theme from "../../lib/styles/theme";
import GoogleRedirect from "../../pages/Oauth/GoogleRedirect";
import { googleURL, kakaoURL, naverURL } from "../../api/Oauth";
import { GoogleOAuthProvider } from "@react-oauth/google";

const SocialLogin = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL();
  };

  const handleNaverLogin = () => {
    window.location.href = naverURL();
  };

  const handleGoogleLogin = () => {
    window.location.href = googleURL();
  };

  return (
    <SocialLoginBlock>
      <button onClick={handleKakaoLogin}>카카오 로그인</button>
      <button onClick={handleNaverLogin}>네이버 로그인</button>
      <button onClick={handleGoogleLogin}>구글 로그인</button>
    </SocialLoginBlock>
  );
};

export default SocialLogin;

const SocialLoginBlock = styled.div`
  ${theme.common.flexCenterColumn}
  gap: 18px;
  button {
    height: 35px;
    width: 80%;
  }
`;
