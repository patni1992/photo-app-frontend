import { SET_PAGINATION } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PAGINATION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
