import { combineReducers } from "redux";
import imageReducer from "./imageReducer";
import activeEditImageReducer from "./activeEditImageReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import commentReducer from "./commentReducer";
import pageReducer from "./pageReducer";
import paginationReducer from "./paginationReducer";

export default combineReducers({
  images: imageReducer,
  activeEditImage: activeEditImageReducer,
  errors: errorReducer,
  auth: authReducer,
  comments: commentReducer,
  page: pageReducer,
  pagination: paginationReducer
});
