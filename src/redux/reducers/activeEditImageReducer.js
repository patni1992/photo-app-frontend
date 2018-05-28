import { SET_ACTIVE_EDIT_IMAGE } from '../actions/types';

export default function(state = {}, action) {
	switch (action.type) {
		case SET_ACTIVE_EDIT_IMAGE:
			return action.activeEditImage;
		default:
			return state;
	}
}
