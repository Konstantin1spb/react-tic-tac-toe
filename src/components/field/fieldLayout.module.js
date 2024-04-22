import styles from './field.module.css';

export const FieldLayout = ({ onCellClickHandler, field }) => {
	return (
		<div className={styles.field}>
			{field.map(({ id, label }, index) => {
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
