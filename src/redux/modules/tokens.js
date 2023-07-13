const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  kakao: "",
  naver: "",
  google: "",
};

const tokensSlice = createSlice({
  name: "tokens",
  initialState,
  reducers: {
    kakaoSuccess: (state, action) => {
      state.kakao = action.payload;
    },
    naverSuccess: (state, action) => {
      state.kakao = action.payload;
    },
    googleSuccess: (state, action) => {
      state.kakao = action.payload;
    },
  },
});

export const { kakaoSuccess, naverSuccess, googleSuccess } =
  tokensSlice.actions;
export default tokensSlice.reducer;
