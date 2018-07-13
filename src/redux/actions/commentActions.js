import axios from "axios";
import { normalize, schema } from "normalizr";
import { SET_COMMENTS, PREPEND_COMMENT } from "./types";
const commentSchema = new schema.Entity("comments", {}, { idAttribute: "_id" });

export const setComments = comments => {
  return {
    type: SET_COMMENTS,
    comments
  };
};

export const addComment = comment => {
  return {
    type: PREPEND_COMMENT,
    comment
  };
};

export const fetchComments = (url = "") => {
  return dispatch => {
    axios
      .get("/comments" + url)
      .then(response => {
        const { docs, total, limit, page, pages } = response.data;
        const normalizeData = normalize(docs, [commentSchema]);
        const dataToPass = {
          entities: normalizeData.entities,
          pagination: {
            total: total,
            limit: limit,
            page: page,
            pages: pages
          }
        };
        return dispatch(setComments(dataToPass));
      })
      .catch(error => {
        return false; // add error method
      });
  };
};

export const postComment = (id, comment) => {
  return dispatch => {
    axios
      .post(`/images/${id}/comments`, {
        text: comment
      })
      .then(response => {
        return dispatch(addComment(response.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
