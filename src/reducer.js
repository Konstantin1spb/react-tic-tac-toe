export const initialState = {
	field: [
		{ id: 0, label: '' },
		{ id: 1, label: '' },
		{ id: 2, label: '' },
		{ id: 3, label: '' },
		{ id: 4, label: '' },
		{ id: 5, label: '' },
		{ id: 6, label: '' },
		{ id: 7, label: '' },
		{ id: 8, label: '' },
	],
	currentPlayer: 'x',
	isGameEnded: false,
	isDraw: false,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_FIELD': {
			return {
				...state,
				field: [...action.payload],
			};
		}
		case 'CLEAR_FIELD': {
			return initialState;
		}
		case 'UPDATE_PLAYER': {
			return {
				...state,
				currentPlayer: `${action.payload === 'x' ? 'o' : 'x'}`,
			};
		}
		case 'END_GAME': {
			return {
				...state,
				isGameEnded: true,
			};
		}
		case 'DRAW': {
			return {
				...state,
				isDraw: true,
			};
		}
		default:
			return state;
	}
};
