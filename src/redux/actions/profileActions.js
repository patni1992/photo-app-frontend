import api from "../../api";
import { push } from "react-router-redux";

import { SET_ERRORS, SET_CURRENT_USER } from "./types";

export const editUser = (id, bodyData) => dispatch => {
  api
    .patch("/users/" + id, bodyData)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
};

// export const logoutUser = userData => dispatch => {
//   localStorage.removeItem("jwtToken");
//   setAuthToken(false);
//   dispatch(setCurrentUser({}));
//   dispatch(push("/"));
// };

// export const setCurrentUser = decoded => {
//   return {
//     type: SET_CURRENT_USER,
//     payload: decoded
//   };
// };
