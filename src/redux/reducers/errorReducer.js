import { SET_ERRORS, CLEAR_ERRORS } from "../actions/types";
const initialState = {};

export default function(state = {}, action) {
  switch (action.type) {
    case SET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
}
