import { Information } from './info/information.module';
import { Field } from './field/field.module';
import styles from './app.module.css';
import { store } from '../store';
import { initialState } from '../reducer';
import { clearField } from '../actions';

export const AppLayout = ({ setCurrentPlayer, setIsGameEnded, setIsDraw, ...props }) => {
	return (
		<>
			<main className={styles.appContainer}>
				<Information {...props}></Information>
				<Field {...props}></Field>
				<button
					className={styles.restartButton}
					onClick={() => {
						setCurrentPlayer('x');
						setIsGameEnded(false);
						setIsDraw(false);
						store.dispatch(clearField());
						// setField([
						// 	{ id: 0, label: '' },
						// 	{ id: 1, label: '' },
						// 	{ id: 2, label: '' },
						// 	{ id: 3, label: '' },
						// 	{ id: 4, label: '' },
						// 	{ id: 5, label: '' },
						// 	{ id: 6, label: '' },
						// 	{ id: 7, label: '' },
						// 	{ id: 8, label: '' },
						// ]);
					}}
				>
					Начать заново
				</button>
			</main>
		</>
	);
};
