import { createAction, handleActions } from "redux-actions";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
// export const writePost = createAction(WRITE_POST, (newPost) => newPost);

const initialState = {
  title: "",
  body: "",
  tags: [],
};

const write = handleActions(
  {
    [INITIALIZE]: (_) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, //특정 key 값 없데이트
    }),
  },
  initialState,
);

export default write;
