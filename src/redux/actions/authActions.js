import axios from "axios";

export function signupRequest(userData) {
  return dispatch => {
    return axios.post("/users", userData);
  };
}
