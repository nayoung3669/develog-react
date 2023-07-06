import axios from "axios";

export const signup = async (newUser) => {
  try {
    console.log(newUser);
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/register`,
      newUser,
    );
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
