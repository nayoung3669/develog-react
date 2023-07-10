import axios from "axios";

//회원가입
export const signup = async (newUser) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/register`,
      newUser,
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

//로그인
export const signin = async (userData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      userData,
    );
    return response;
  } catch (e) {
    console.log(e);
  }
};

//인증 확인
export const authorizeUser = async () => {};

//posts (post) : json-server
export const writePost = async (newPost) => {
  try {
    const response = await axios.post("http://localhost:4000/posts", newPost);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

//posts (get)
