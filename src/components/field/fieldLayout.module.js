import styles from './field.module.css';

export const FieldLayout = ({ field, setField, currentPlayer, setCurrentPlayer }) => {
	return (
		<div className={styles.field}>
			{field.map(({ id, label }) => {
				return (
					<button
						key={id}
						onClick={() => {
							let fieldCopy = field;
							fieldCopy[id] = {
								id: id,
								label: currentPlayer,
							};
							setField(fieldCopy);
							label = currentPlayer;
							console.log(field, label, id);
						}}
					>
						{label}
					</button>
				);
			})}
		</div>
	);
};
