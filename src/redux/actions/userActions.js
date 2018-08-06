import { APPEND_USERS } from "./types";
import api from "../../api";

export const appendUsers = data => {
  return {
    type: APPEND_USERS,
    payload: data
  };
};

export const fetchUser = id => {
  return (dispatch, getState) => {
    api
      .get("/users/" + id)
      .then(response => {
        dispatch(
          appendUsers({
            authors: {
              [response.data._id]: response.data
            }
          })
        );
      })
      .catch(err => {
        console.log(err); // add error method
      });
  };
};
