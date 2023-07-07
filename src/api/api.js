import axios from "axios";

export const signup = async (newUser) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/register`,
    newUser,
  );
  return response;
};

export const signin = async (userData) => {
  const response = await axios.post(
    `${process.env.REACT_APP_SERVER_URL}/login`,
    userData,
  );
  return response;
};

//baseURL
