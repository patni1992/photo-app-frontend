import { APPEND_USERS } from "../actions/types";

const initialState = {
  items: {},
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APPEND_USERS:
      return {
        ...state,
        isLoading: false,
        items: Object.assign({}, state.items, action.payload.authors)
      };
    default:
      return state;
  }
}
