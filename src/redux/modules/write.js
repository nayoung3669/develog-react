import { createAction, handleActions } from "redux-actions";

const CHANGE_FIELD = "write/CHANGE_FIELD";

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  title: "",
  body: "",
  tags: [],
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, //특정 key 값 없데이트
    }),
  },
  initialState,
);

export default write;
