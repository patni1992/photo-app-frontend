import {
	SET_IMAGES,
	RECEIVE_ENTITIES,
	DELETE_IMAGE,
	RECEIVE_ENTITIE
} from '../actions/types';

const initialState = {
	items: {},
	isLoading: false,
	error: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case RECEIVE_ENTITIES:
			const { entities } = action.payload;
			if (entities && entities.images) {
				return {
					...state,
					isLoading: false,
					items: Object.assign({}, state.items, entities.images)
				};
			}

			return state;
		case DELETE_IMAGE:
			let copy = Object.assign({}, state.items);
			delete copy[action.payload.id];
			return {
				...state,
				isLoading: false,
				items: copy
			};

		default:
			return state;
	}
}
