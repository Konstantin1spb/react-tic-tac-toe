import styles from './field.module.css';
import { store } from '../../store';

export const FieldLayout = ({ onCellClickHandler }) => {
	return (
		<div className={styles.field}>
			{store.getState().map(({ id, label }, index) => {
				return (
					<button
						key={id}
						onClick={() => {
							onCellClickHandler(index);
						}}
					>
						{label}
					</button>
				);
			})}
		</div>
	);
};
