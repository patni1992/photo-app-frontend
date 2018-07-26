import {
  SET_COMMENTS,
  PREPEND_COMMENT,
  RECEIVE_ENTITIES,
  APPEND_ENTITIES
} from "../actions/types";

const initialState = {
  items: {},
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ENTITIES:
      const { entities } = action.payload;
      return {
        ...state,
        items: Object.assign({}, state.items, entities.comments)
      };
    case APPEND_ENTITIES:
      if (action.payload.entities && action.payload.entities.comments) {
        return {
          ...state,
          isLoading: false,
          items: action.payload.entities.comments,
          pagination: action.payload.pagination
        };
      }

      return state;
    case SET_COMMENTS:
      return {
        ...state,
        items: action.payload.comments
      };
    case PREPEND_COMMENT:
      return {
        ...state,
        items: { ...action.comment, ...state.items }
      };
    default:
      return state;
  }
}
