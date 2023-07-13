import { combineReducers } from "@reduxjs/toolkit";
import writeReducer from "../modules/write";
import userReducer from "../modules/user";
import tokensReducer from "../modules/tokens";

const rootReducer = combineReducers({
  write: writeReducer,
  user: userReducer,
  tokens: tokensReducer,
});

export default rootReducer;
