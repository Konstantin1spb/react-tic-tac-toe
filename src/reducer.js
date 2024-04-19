export const initialState = [
	{ id: 0, label: '' },
	{ id: 1, label: '' },
	{ id: 2, label: '' },
	{ id: 3, label: '' },
	{ id: 4, label: '' },
	{ id: 5, label: '' },
	{ id: 6, label: '' },
	{ id: 7, label: '' },
	{ id: 8, label: '' },
];

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_FIELD': {
			return action.payload;
		}
		case 'CLEAR_FIELD': {
			return initialState;
		}
		default:
			return state;
	}
};
