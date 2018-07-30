import api from "../../api";
import { normalize, schema } from "normalizr";
import { SET_COMMENTS, PREPEND_COMMENT } from "./types";
import { prependPageResources } from "./pageActions";
import { addAlert } from "./alertActions";
import { appendUsers } from "./userActions";
import { setPageResources } from "./pageActions";
import commentSchema from "../schemas/commentSchema";

export const setComments = comments => {
  return {
    type: SET_COMMENTS,
    payload: comments
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
    api
      .get("/comments" + url)
      .then(response => {
        const { docs, total, limit, page, pages } = response.data;
        const normalizeData = normalize(docs, [commentSchema]);

        dispatch(
          setPageResources({
            dataBelongToPage: "profilePage",
            resources: {
              comments: Object.keys(normalizeData.entities.comments)
            }
          })
        );
        dispatch(
          appendUsers({ authors: normalizeData.entities.commentAuthors })
        );
        dispatch(setComments({ comments: normalizeData.entities.comments }));
      })
      .catch(error => {
        return false; // add error method
      });
  };
};

export const postComment = (id, comment) => {
  return dispatch => {
    api
      .post(`/images/${id}/comments`, {
        text: comment
      })
      .then(response => {
        const normalizeData = normalize({ comments: response.data }, [
          commentSchema
        ]);

        dispatch(
          prependPageResources({
            dataBelongToPage: "photoDetail",
            resources: {
              comments: [response.data._id]
            }
          })
        );
        dispatch(appendUsers(normalizeData.entities.commentAuthors));
        dispatch(addComment(normalizeData.entities.comments));

        dispatch(
          addAlert({
            title: "Success",
            message: "Comment posted",
            level: "success"
          })
        );
      })
      .catch(error => {
        console.log(error);
      });
  };
};
