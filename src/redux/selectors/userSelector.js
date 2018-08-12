import { createSelector } from "reselect";

const selectImageById = (state, props) => {
  const image = state.images.items[props.match.params.id];

  if (!image) {
    return {};
  }

  return image;
};

const selectUsers = state => state.users.items;
const selectUserByImage = (image, users) => users[image.author];

export const selectUserById = (state, id) => {
  const user = state.users.items[id];
  return user ? user : {};
};

export const getAuthorsFromComments = (state, comments) => {
  let authors = {};

  comments.forEach(comment => {
    authors[comment.author] = state.users.items[comment.author];
  });

  return authors;
};

export const selectUserStatsById = (state, props) => {
  const userStats = state.userStats.items[props.match.params.id];

  if (!userStats) {
    return {};
  }

  return userStats;
};

export const getUserByImageIdState = createSelector(
  selectImageById,
  selectUsers,
  selectUserByImage
);
