import { Information } from './info/information.module';
import { Field } from './field/field.module';
import styles from './app.module.css';
import { store } from '../store';
import { clearField } from '../actions';
import { useDispatch } from 'react-redux';

export const AppLayout = ({ setCurrentPlayer, ...props }) => {
	const dispatch = useDispatch();
	return (
		<>
			<main className={styles.appContainer}>
				<Information {...props}></Information>
				<Field {...props}></Field>
				<button
					className={styles.restartButton}
					onClick={() => {
						dispatch(clearField());
					}}
				>
					Начать заново
				</button>
			</main>
		</>
	);
};
