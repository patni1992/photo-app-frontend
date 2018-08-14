import {
  SET_ENTITIES,
  RECEIVE_ENTITIES,
  DELETE_IMAGE,
  RESET_IMAGES,
  IMAGE_LOADING,
  APPEND_IMAGES
} from "../actions/types";

const initialState = {
  items: {},
  isLoading: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APPEND_IMAGES:
      return {
        ...state,
        isLoading: false,
        items: Object.assign({}, state.items, action.payload.images)
      };

    case RECEIVE_ENTITIES:
      if (action.payload.entities && action.payload.entities.images) {
        return {
          ...state,
          isLoading: false,

          items: action.payload.entities.images,
          pagination: action.payload.pagination
        };
      }

      return state;

    case SET_ENTITIES:
      return {
        ...state,
        isLoading: false,
        items: action.payload.images,
        pagination: action.payload.pagination
      };

      return state;

    case DELETE_IMAGE:
      let copy = Object.assign({}, state.items);
      delete copy[action.payload.id];
      return {
        ...state,
        isLoading: false,
        items: copy
      };

    case RESET_IMAGES:
      return initialState;

    case IMAGE_LOADING:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
