import { createSlice } from "@reduxjs/toolkit";
import { useMutation } from "react-query";
import { signin } from "../../api/api";
import { useDispatch } from "react-redux";

const initialState = {
  isLoggedIn: false,
  user: "",
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    loginSucess: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      console.log(state);
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loginStart, loginSucess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;

//react-query custom hooks (API promise handling)
export const useLoginMutation = () => {
  const dispatch = useDispatch();

  const mutation = useMutation(signin, {
    onSuccess: (response) => {
      const { token } = response.data;
      localStorage.setItem("accessToken", token);
      dispatch(loginSucess());
    },
    onError: (e) => {
      console.log("로그인에러", e);
    },
  });
  return mutation;
};
