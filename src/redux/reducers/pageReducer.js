import {
  APPEND_PAGE_RESOURCERS,
  SET_PAGE_RESOURCERS,
  EMPTY_PAGE,
  PREPEND_PAGE_RESOURCERS
} from "../actions/types";

const initialState = {
  feed: { images: [], comments: [] },
  profilePage: { images: [], comments: [] },
  photoDetail: { images: [], comments: [] }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case APPEND_PAGE_RESOURCERS:
      return appendResources(
        state,
        action.payload.resources,
        action.payload.dataBelongToPage
      );
    case PREPEND_PAGE_RESOURCERS:
      return prependResources(
        state,
        action.payload.resources,
        action.payload.dataBelongToPage
      );
    case SET_PAGE_RESOURCERS:
      var bob = setResources(
        state,
        action.payload.resources,
        action.payload.dataBelongToPage
      );

      return bob;

    case EMPTY_PAGE:
      let newPageState = {
        ...state
      };

      newPageState[action.payload.dataBelongToPage] = initialState.profilePage;
      return newPageState;
    default:
      return state;
  }
}

export function getEntitiesFromResourcsIds(state, dataBelongToPage) {
  let mapedResources = state.page[dataBelongToPage].images
    .filter(id => {
      if (state.images.items.hasOwnProperty(id)) {
        return id;
      }
    })
    .map(id => {
      return state.images.items[id];
    });

  return mapedResources;
}

function appendResources(state, resources, dataBelongToPage) {
  let newResources = {
    ...state
  };

  Object.keys(resources).forEach(resource => {
    newResources[dataBelongToPage][resource] = [
      ...state[dataBelongToPage][resource],
      ...resources[resource]
    ].reduce(function(a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  });

  return newResources;
}

function prependResources(state, resources, dataBelongToPage) {
  let newResources = {
    ...state
  };

  Object.keys(resources).forEach(resource => {
    newResources[dataBelongToPage][resource] = [
      ...resources[resource],
      ...state[dataBelongToPage][resource]
    ].reduce(function(a, b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
  });

  return newResources;
}

function setResources(state, resources, dataBelongToPage) {
  let newResources = {
    ...state,
    [dataBelongToPage]: { ...state[dataBelongToPage], ...resources }
  };

  newResources;

  return newResources;
}
