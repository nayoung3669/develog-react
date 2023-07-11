import { createSlice } from "@reduxjs/toolkit";
import { useMutation } from "react-query";
import { signin, signout, verifyUser } from "../../api/api";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    verifySucess: (state) => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    verifyFailure: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const {
  loginStart,
  loginSucess,
  loginFailure,
  logout,
  verifySucess,
  verifyFailure,
} = userSlice.actions;
export default userSlice.reducer;

//react-query custom hooks (API promise handling)
export const useLoginMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation(signin, {
    onSuccess: (response) => {
      const { token } = response.data;
      localStorage.setItem("accessToken", token);
      dispatch(loginSucess());
      navigate("/home");
    },
    onError: (e) => {
      console.log("로그인에러", e);
    },
  });
  return mutation;
};

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation(signout, {
    onSuccess: () => {
      dispatch(logout());
      navigate("/login");
    },
    onError: (e) => {
      console.log("로그아웃 에러", e);
    },
  });
  return mutation;
};

export const useVerifyMutation = () => {
  const dispatch = useDispatch();

  const mutation = useMutation(verifyUser, {
    onSuccess: () => {
      dispatch(verifySucess());
    },
    onError: (e) => {
      dispatch(verifyFailure());
      console.log("verify error", e);
    },
  });
  return mutation;
};
