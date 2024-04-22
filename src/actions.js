export const updateField = (delta) => {
	return {
		type: 'UPDATE_FIELD',
		payload: delta,
	};
};

export const clearField = () => {
	return {
		type: 'CLEAR_FIELD',
	};
};

export const updatePlayer = (delta) => {
	return {
		type: 'UPDATE_PLAYER',
		payload: delta,
	};
};

export const endTheGame = () => {
	return {
		type: 'END_GAME',
	};
};

export const gameDraw = () => {
	return {
		type: 'DRAW',
	};
};
