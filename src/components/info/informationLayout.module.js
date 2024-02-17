import styles from './information.module.css';

export const InformationLayout = ({
	isDraw,
	setIsDraw,
	isGameEnded,
	setIsGameEnded,
	currentPlayer,
	setCurrentPlayer,
}) => {
	let infoText = '';
	if (isDraw) {
		infoText = 'Ничья';
	} else if (!isDraw && isGameEnded) {
		infoText = `Победа: ${currentPlayer}`;
	} else {
		infoText = `Ходит: ${currentPlayer}`;
	}
	return <span className={styles.infoText}>{infoText}</span>;
};
