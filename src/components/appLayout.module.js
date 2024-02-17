import { Information } from './info/information.module';
import { Field } from './field/field.module';
import styles from './app.module.css';

export const AppLayout = ({
	field,
	setField,
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
}) => {
	return (
		<>
			<main className={styles.appContainer}>
				<Information
					isDraw={isDraw}
					setIsDraw={setIsDraw}
					isGameEnded={isGameEnded}
					setIsGameEnded={setIsGameEnded}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
				></Information>
				<Field
					field={field}
					setField={setField}
					currentPlayer={currentPlayer}
					setCurrentPlayer={setCurrentPlayer}
				></Field>
				<button className={styles.restartButton}>Начать заново</button>
			</main>
		</>
	);
};
