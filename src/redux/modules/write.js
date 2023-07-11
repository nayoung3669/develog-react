import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  body: "",
  tags: [],
};

const writeSlice = createSlice({
  name: "write",
  initialState,
  reducers: {
    initialize: (_) => initialState,
    changeField: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, //특정 key 값 없데이트
    }),
  },
});

export const { initialize, changeField } = writeSlice.actions;

export default writeSlice.reducer;
