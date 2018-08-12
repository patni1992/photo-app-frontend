import { setImageLoading, fetchNormalizeData, setImages } from "./imageActions";
import { setPageResources } from "./pageActions";
import { setPagination } from "./paginationActions";

export const searchFetchImages = (url = "", dataBelongToPage) => {
  return dispatch => {
    dispatch(setImageLoading());

    fetchNormalizeData(url).then(dataToPass => {
      console.log(dataToPass);
      dispatch(setImages(dataToPass));

      const images = dataToPass.entities.hasOwnProperty("images")
        ? dataToPass.entities.images
        : [];

      dispatch(
        setPagination({ [dataBelongToPage + "images"]: dataToPass.pagination })
      );

      dispatch(
        setPageResources({
          dataBelongToPage,
          resources: {
            images: Object.keys(images)
          }
        })
      );
    });
  };
};
