import api from "../../api";
import { normalize } from "normalizr";
import { push } from "react-router-redux";

import {
  RESET_IMAGES,
  DELETE_IMAGE,
  APPEND_IMAGES,
  SET_ENTITIES,
  IMAGE_LOADING
} from "./types";
import {
  appendPageResources,
  setPageResources,
  prependPageResources
} from "./pageActions";
import { appendUsers } from "./userActions";
import { addAlert } from "./alertActions";
import { setComments } from "./commentActions";
import { setPagination } from "./paginationActions";
import imageSchema from "../schemas/imageSchema";

export const appendImages = data => {
  return {
    type: APPEND_IMAGES,
    payload: data
  };
};

export const setImages = data => {
  return {
    type: SET_ENTITIES,
    payload: data
  };
};

export const resetImages = () => {
  return {
    type: RESET_IMAGES
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

export const fetchNormalizeData = url => {
  return api
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

      return dataToPass;
    })
    .catch(err => {
      console.log(err); // add error method
    });
};

export const fetchImages = (
  url = "",
  dataBelongToPage,
  setPageresources = false
) => {
  return dispatch => {
    dispatch(setImageLoading());

    fetchNormalizeData(url).then(dataToPass => {
      const images = dataToPass.entities.hasOwnProperty("images")
        ? dataToPass.entities.images
        : [];

      const authors = dataToPass.entities.hasOwnProperty("imageAuthors")
        ? dataToPass.entities.imageAuthors
        : [];

      dispatch(appendImages({ images }));
      dispatch(appendUsers({ authors }));

      dispatch(
        setPagination({ [dataBelongToPage + "images"]: dataToPass.pagination })
      );
      if (setPageresources) {
        dispatch(
          setPageResources({
            dataBelongToPage,
            resources: {
              images: Object.keys(images)
            }
          })
        );
      } else {
        dispatch(
          appendPageResources({
            dataBelongToPage,
            resources: {
              images: Object.keys(dataToPass.entities.images)
            }
          })
        );
      }
    });
  };
};

export const fetchImage = (id, url = "", dataBelongToPage) => {
  return (dispatch, getState) => {
    api
      .get("/images/" + id + "/" + url)
      .then(response => {
        const normalizeData = normalize([response.data], [imageSchema]);

        dispatch(
          setPageResources({
            dataBelongToPage,
            resources: {
              images: Object.keys(normalizeData.entities.images),
              comments: Object.keys(normalizeData.entities.comments)
            }
          })
        );

        dispatch(
          appendUsers({
            authors: {
              ...normalizeData.entities.commentAuthors,
              ...normalizeData.entities.imageAuthors
            }
          })
        );
        dispatch(appendImages({ images: normalizeData.entities.images }));
        dispatch(setComments({ comments: normalizeData.entities.comments }));
      })
      .catch(err => {
        console.log(err); // add error method
      });
  };
};

export const deleteImage = id => dispatch => {
  api
    .delete(`/images/${id}`)
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
  api[subitMethod]("/images/" + id, bodyData)
    .then(response => {
      if (subitMethod === "post") {
        dispatch(
          addAlert({
            title: "Success",
            message: "Image Added",
            level: "success"
          })
        );
      } else if (subitMethod === "patch") {
        dispatch(
          addAlert({
            title: "Success",
            message: "Image edited",
            level: "success"
          })
        );
      }

      const normalizeData = normalize([response.data], [imageSchema]);
      const images = normalizeData.entities.hasOwnProperty("images")
        ? normalizeData.entities.images
        : [];

      dispatch(appendImages({ images }));
      dispatch(
        prependPageResources({
          dataBelongToPage: "feed",
          resources: {
            images: Object.keys(normalizeData.entities.images)
          }
        })
      );
    })

    .catch(error =>
      dispatch(
        addAlert({
          title: "Error",
          message: error.response.data.message,
          level: "error"
        })
      )
    );
};
