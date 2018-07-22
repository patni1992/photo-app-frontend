import { ADD_ALERT, CLEAR_ALERT } from "../actions/types";

export default function alert(state = {}, action) {
  switch (action.type) {
    case ADD_ALERT:
      return {
        message: action.payload.message,
        level: action.payload.level,
        title: action.payload.title
      };

    case CLEAR_ALERT:
      return {};

    default:
      return state;
  }
}
