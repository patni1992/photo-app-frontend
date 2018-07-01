import axios from "axios";
import { normalize, schema } from "normalizr";
import { push } from "react-router-redux";
import {
  SET_IMAGES,
  RECEIVE_ENTITIES,
  DELETE_IMAGE,
  APPEND_ENTITIES,
  IMAGE_LOADING
} from "./types";

const commentSchema = new schema.Entity("comments", {}, { idAttribute: "_id" });
const imageSchema = new schema.Entity(
  "images",
  {
    comments: [commentSchema]
  },
  { idAttribute: "_id" }
);

export const setImages = data => {
  return {
    type: RECEIVE_ENTITIES,
    payload: data
  };
};

export const appendImages = data => {
  return {
    type: APPEND_ENTITIES,
    payload: data
  };
};

export const setImageLoading = () => ({ type: IMAGE_LOADING, payload: "" });

export function setCurrentImagetId(id) {
  return {
    type: "SET_CURRENT_IMAGE_ID",
    payload: {
      id
    }
  };
}

export const fetchImages = (url = "", appendData = false) => {
  return (dispatch, getState) => {
    dispatch(setImageLoading());
    axios
      .get("/images" + url)
      .then(response => {
        const { docs, total, limit, page, pages } = response.data;
        const normalizeData = normalize(docs, [imageSchema]);
        const dataToPass = {
          entities: normalizeData.entities,
          pagination: {
            total: total,
            limit: limit,
            page: page,
            pages: pages
          }
        };

        if (!appendData) {
          dispatch(setImages(dataToPass));
        } else {
          dispatch(appendImages(dataToPass));
        }
      })
      .catch(err => {
        console.log(err); // add error method
      });
  };
};

export const fetchImage = (id, url = "") => {
  return (dispatch, getState) => {
    axios
      .get("/images/" + id + "/" + url)
      .then(response => {
        const normalizeData = normalize([response.data], [imageSchema]);

        dispatch(setImages(normalizeData));
      })
      .catch(err => {
        console.log(err); // add error method
      });
  };
};

export const deleteImage = id => dispatch => {
  axios
    .delete(`/images/` + id)
    .then(res => {
      dispatch({
        type: DELETE_IMAGE,
        payload: { id }
      });
      dispatch(push("/"));
    })
    .catch(err => console.log("hello"));
};

export const editImage = (id, subitMethod = "post", bodyData) => dispatch => {
  axios[subitMethod]("/images/" + id, bodyData)
    .then(response => {
      dispatch(push("/"));
    })
    .catch(error => console.log(error));
};
