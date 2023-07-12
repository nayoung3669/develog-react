import React from "react";
import Button from "../../common/Button";
import { kakaoURL } from "../../api/Oauth";

const SocialLogin = () => {
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL();
  };
  return (
    <div>
      <Button onClick={handleKakaoLogin}>카카오 로그인</Button>
    </div>
  );
};

export default SocialLogin;
