import { createAction, handleActions } from "redux-actions";
import * as api from "../../api/api";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const WRITE_POST = "write/WRITE_POST";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writePost = createAction(WRITE_POST, (newPost) => newPost);

const initialState = {
  title: "",
  body: "",
  tags: [],
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, //특정 key 값 없데이트
    }),
    [WRITE_POST]: (state, { payload }) => api.writePost(payload),
  },
  initialState,
);

export default write;
