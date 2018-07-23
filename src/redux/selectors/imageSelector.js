import { createSelector } from "reselect";

const pageSelector = state => state.page;
const imageSelector = state => state.images;

const getImagesFromResourceIds = (page, images) => {
  let mapedResources = page["profilePage"].images
    .filter(id => {
      if (images.items.hasOwnProperty(id)) {
        return id;
      }
    })
    .map(id => {
      return images.items[id];
    });

  return mapedResources;
};

export const getImagesFromResourceIdsState = createSelector(
  pageSelector,
  imageSelector,
  getImagesFromResourceIds
);
