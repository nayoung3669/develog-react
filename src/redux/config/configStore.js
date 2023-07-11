import { combineReducers } from "@reduxjs/toolkit";
import writeReducer from "../modules/write";
import userReducer from "../modules/user";

const rootReducer = combineReducers({
  write: writeReducer,
  user: userReducer,
});

export default rootReducer;
