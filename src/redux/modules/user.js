import { createSlice } from "@reduxjs/toolkit";

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
    },
  },
});

export const { loginStart, loginSucess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
