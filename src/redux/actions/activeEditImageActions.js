import { SET_ACTIVE_EDIT_IMAGE } from './types';

export const setActiveEditImage = image => {
	return {
		type: SET_ACTIVE_EDIT_IMAGE,
		activeEditImage: image
	};
};
