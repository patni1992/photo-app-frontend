import {
  SET_IMAGES,
  RECEIVE_ENTITIES,
  DELETE_IMAGE,
  RECEIVE_ENTITIE,
  IMAGE_LOADING,
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
      const { entities, pagination } = action.payload;
      if (entities && entities.images) {
        return {
          ...state,
          isLoading: false,
          items: Object.assign({}, state.items, entities.images),
          pagination
        };
      }

      return state;
    case APPEND_ENTITIES:
      if (action.payload.entities && action.payload.entities.images) {
        return {
          ...state,
          isLoading: false,
          items: action.payload.entities.images,
          pagination: action.payload.pagination
        };
      }

      return state;
    case DELETE_IMAGE:
      let copy = Object.assign({}, state.items);
      delete copy[action.payload.id];
      return {
        ...state,
        isLoading: false,
        items: copy
      };

    case IMAGE_LOADING:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
