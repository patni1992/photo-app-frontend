import { APPEND_USERS } from "./types";

export const appendUsers = data => {
  return {
    type: APPEND_USERS,
    payload: data
  };
};
