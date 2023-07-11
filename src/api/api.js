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
  const { token } = response.data;
  localStorage.setItem("accessToken", token);
  return response;
};

//로그아웃
export const signout = () => {
  localStorage.removeItem("accessToken");
};

//인증 확인
export const verifyUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) throw new Error("토큰이 없습니다.");

  const response = await axios(`${process.env.REACT_APP_SERVER_URL}/user`, {
    method: "get",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};

//get posts data
export const getPosts = async () => {
  const response = await axios.get("http://localhost:4000/posts");
  return response;
};

//post posts
export const writePost = async (newPost) => {
  const response = await axios.post("http://localhost:4000/posts", newPost);
  return response;
};
