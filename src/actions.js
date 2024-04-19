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
