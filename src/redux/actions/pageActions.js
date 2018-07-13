import {
  APPEND_PAGE_RESOURCERS,
  SET_PAGE_RESOURCERS,
  EMPTY_PAGE,
  PREPEND_PAGE_RESOURCERS
} from "./types";

export const appendPageResources = payload => {
  return {
    type: APPEND_PAGE_RESOURCERS,
    payload
  };
};

export const prependPageResources = payload => {
  return {
    type: PREPEND_PAGE_RESOURCERS,
    payload
  };
};

export const setPageResources = payload => {
  return {
    type: SET_PAGE_RESOURCERS,
    payload
  };
};

export const emptyPage = payload => {
  return {
    type: EMPTY_PAGE,
    payload
  };
};
