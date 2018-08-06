import { APPEND_USER_STATS } from "../actions/types";

const initialState = {
  items: {},
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APPEND_USER_STATS:
      return {
        ...state,
        isLoading: false,
        items: Object.assign({}, state.items, action.payload)
      };

    default:
      return state;
  }
}
