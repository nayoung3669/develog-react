import axios from "axios";

//카카오
export const kakaoURL = () => {
  return `${process.env.REACT_APP_KAKAO_AUTH_URL}?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;
};

export const kakaoLogin = async (kakaoCode) => {
  try {
    const response = await axios("http://localhost:3001/kakaoLogin", {
      method: "post",
      params: {
        code: kakaoCode,
      },
    });
    return response;
  } catch (e) {
    console.log(e);
  }
};

//네이버
export const naverURL = () => {
  return `${process.env.REACT_APP_NAVER_AUTH_URL}?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&state=test&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}`;
};

export const naverLogin = async (naverCode) => {
  try {
    const response = await axios("http://localhost:3001/naverLogin", {
      method: "post",
      data: {
        code: naverCode,
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

//구글
export const googleURL = () => {
  return `${process.env.REACT_APP_GOOGLE_AUTH_URL}?response_type=code&client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=http://localhost:3000/google`;
};

export const googleLogin = async (googleCode) => {
  console.log(googleCode);
  try {
    const response = await axios("http://localhost:3001/googleLogin", {
      method: "post",
      params: {
        code: googleCode,
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

//로그아웃

export const socialLogout = async () => {
  try {
    const response = await axios("http://localhost:3001/user/logout", {
      method: "post",
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const kakaoLogout = async (kakao) => {
  try {
    const response = await axios("https://kapi.kakao.com/v1/user/unlink", {
      method: "post",
      headers: {
        Authorization: `Bearer ${kakao}`,
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

//사용자 반환 (usertoken)
export const verifyUser = async () => {
  try {
    const response = await axios("http://localhost:3001/usertoken", {
      method: "get",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
