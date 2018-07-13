import { SET_PAGINATION } from "./types";

export const setPagination = payload => {
  return {
    type: SET_PAGINATION,
    payload
  };
};
