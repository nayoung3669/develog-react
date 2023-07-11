import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state) => {
      state.isLoggedIn = true;
    },
    loginFailure: (state) => {
      state.isLoggedIn = false;
    },
    verifySuccess: (state) => {
      state.isLoggedIn = true;
    },
    verifyFailure: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, loginFailure, verifySuccess, verifyFailure } =
  userSlice.actions;
export default userSlice.reducer;
