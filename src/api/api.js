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
    console.log("회원가입 실패");
  }
};

//로그인
export const signin = async (userData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/login`,
      userData,
    );
    localStorage.setItem("accessToken", response.data.token);
    return response;
  } catch (e) {
    console.log(e);
    console.log("로그인 실패");
  }
};

//인증 확인
export const verifyUser = async () => {
  try {
    const response = await axios(`${process.env.REACT_APP_SERVER_URL}/user`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    console.log("회원 인증완료");
    return response;
  } catch (e) {
    console.log("회원 인증 실패");
    console.log(e);
  }
};

//get posts data
export const getPosts = async () => {
  try {
    const response = await axios.get("http://localhost:4000/posts");
    console.log("get post data");
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};
//post posts
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
