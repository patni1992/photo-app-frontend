import { SET_COMMENTS, ADD_COMMENT, RECEIVE_ENTITIES } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case RECEIVE_ENTITIES:
			const { entities } = action.payload;
			return { ...state, items: entities.comments };
		case ADD_COMMENT:
			console.log('dsfsdf');
			console.log(action);
			return [ ...state, action.comment ];
		default:
			return state;
	}
}
