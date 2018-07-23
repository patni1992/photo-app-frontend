import { createSelector } from "reselect";

const selectImageById = (state, props) => {
  const image = state.images.items[props.match.params.id];

  if (!image) {
    return {};
  }

  return image;
};

const selectUsers = state => state.users.items;

const selectUserByImage = (image, users) => {
  return users[image.author];
};

export const getUserByImageIdState = createSelector(
  selectImageById,
  selectUsers,
  selectUserByImage
);
