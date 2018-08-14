import {
  setImageLoading,
  fetchNormalizeData,
  setImages,
  appendImages
} from "./imageActions";
import { setPageResources } from "./pageActions";
import { setPagination } from "./paginationActions";
import { appendUsers } from "./userActions";

export const searchFetchImages = (url = "", dataBelongToPage) => {
  return dispatch => {
    dispatch(setImageLoading());

    fetchNormalizeData(url).then(dataToPass => {
      const images = dataToPass.entities.hasOwnProperty("images")
        ? dataToPass.entities.images
        : [];

      const authors = dataToPass.entities.hasOwnProperty("imageAuthors")
        ? dataToPass.entities.imageAuthors
        : [];

      dispatch(
        setPageResources({
          dataBelongToPage,
          resources: {
            images: Object.keys(images)
          }
        })
      );
      dispatch(appendUsers({ authors }));
      dispatch(setImages({ images }));

      dispatch(
        setPagination({ [dataBelongToPage + "images"]: dataToPass.pagination })
      );
    });
  };
};
