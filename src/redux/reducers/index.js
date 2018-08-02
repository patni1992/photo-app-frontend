import { combineReducers } from "redux";
import { CLEAR_STORE } from "../actions/types";
import imageReducer from "./imageReducer";
import activeEditImageReducer from "./activeEditImageReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import commentReducer from "./commentReducer";
import pageReducer from "./pageReducer";
import alertReducer from "./alertReducer";
import paginationReducer from "./paginationReducer";
import userReducer from "./userReducer";

const appReducer = combineReducers({
  images: imageReducer,
  activeEditImage: activeEditImageReducer,
  errors: errorReducer,
  auth: authReducer,
  comments: commentReducer,
  page: pageReducer,
  alert: alertReducer,
  users: userReducer,
  pagination: paginationReducer
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
