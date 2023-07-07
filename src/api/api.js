import axios from "axios";

//회원가입
export const signup = async (newUser) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/register`,
    newUser,
  );
  return response;
};

//로그인
export const signin = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/login`,
    userData,
  );
  return response;
};

//인증 확인
export const authorizeUser = async () => {};

//baseURL
