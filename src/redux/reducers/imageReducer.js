import { SET_IMAGES } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case SET_IMAGES:
			return action.images;
		default:
			return state;
	}
}
