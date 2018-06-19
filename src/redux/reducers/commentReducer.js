import { SET_COMMENTS } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case SET_COMMENTS:
			return action.comments;
		default:
			return state;
	}
}
