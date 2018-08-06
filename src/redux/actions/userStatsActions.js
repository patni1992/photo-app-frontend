import api from "../../api";
import { APPEND_USER_STATS } from "./types";

export const fetchUserStats = id => {
  return dispatch => {
    return api
      .get(`/users/${id}/stats`)
      .then(response => {
        dispatch({
          type: APPEND_USER_STATS,
          payload: { [response.data.userId]: response.data }
        });
        return response;
      })
      .catch(err => {
        console.log(err); // add error method
      });
  };
};
