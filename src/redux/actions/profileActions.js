import api from "../../api";

import { addAlert } from "./alertActions";
import { logoutUser } from "./authActions";

export const editUser = (id, bodyData) => dispatch => {
  api
    .patch("/users/" + id, bodyData)
    .then(res => {
      dispatch(
        addAlert({
          title: "Success",
          message: "Profile Edited",
          level: "success"
        })
      );
    })
    .catch(err => {
      dispatch(
        addAlert({
          title: "Error",
          message: err.message,
          level: "error"
        })
      );
    });
};

export const deleteUser = id => dispatch => {
  api
    .delete("/users/" + id)
    .then(res => {
      console.log("bjsdjflsdklfsdlkf");
      dispatch(logoutUser());
    })
    .catch(err => {
      dispatch(
        addAlert({
          title: "Error",
          message: err.message,
          level: "error"
        })
      );
    });
};
