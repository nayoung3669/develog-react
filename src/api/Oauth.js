//소셜로그인
export const kakaoURL = () => {
  const KAKAO_AUTH_URL = `${process.env.REACT_APP_KAKAO_AUTH_URL}?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;
  return KAKAO_AUTH_URL;
};

export const kakaoLogin = () =