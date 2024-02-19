import styles from './field.module.css';

export const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={styles.field}>
			{field.map(({ id, label }, index) => {
				return (
					<button
						key={id}
						onClick={() => {
							onClick(index);
						}}
					>
						{label}
					</button>
				);
			})}
		</div>
	);
};
