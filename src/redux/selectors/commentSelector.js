import { createSelector } from "reselect";

const pageSelector = (state, page) => state.page[page];
const commentsSelector = state => state.comments;
const getCommentsFromResourceId = (page, comments) => {
  let mapedResources = page.comments
    .filter(id => {
      if (comments.items.hasOwnProperty(id)) {
        return id;
      }
    })
    .map(id => {
      return comments.items[id];
    });

  return mapedResources;
};

export const getCommentsFromResourceIdsState = createSelector(
  pageSelector,
  commentsSelector,
  getCommentsFromResourceId
);
