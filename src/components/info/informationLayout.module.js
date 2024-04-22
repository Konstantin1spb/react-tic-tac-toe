import styles from './information.module.css';
import { selectIsDraw } from '../../selectors';
import { useSelector } from 'react-redux';

export const InformationLayout = ({ currentPlayer, isGameEnded }) => {
	const isDraw = useSelector(selectIsDraw);
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
