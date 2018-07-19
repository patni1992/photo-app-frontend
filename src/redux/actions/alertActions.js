import { ADD_ALERT, CLEAR_ALERT } from "./types";

export function addAlert(payload) {
  return {
    type: ADD_ALERT,
    payload
  };
}

export function clearAlert() {
  return {
    type: CLEAR_ALERT
  };
}
