import { FieldLayout } from './fieldLayout.module';

export const Field = ({ field, setField, currentPlayer, setCurrentPlayer }) => {
	return (
		<FieldLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
		></FieldLayout>
	);
};
