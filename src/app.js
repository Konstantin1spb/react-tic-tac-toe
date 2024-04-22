import { AppLayout } from './components/appLayout.module.js';
import { updateField, updatePlayer, endTheGame, gameDraw } from './actions.js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectField, selectCurrentPlayer, selectIsGameEnded } from './selectors.js';

const App = () => {
	const field = useSelector(selectField);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);
	const dispatch = useDispatch();
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // Варианты побед по горизонтали
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // Варианты побед по вертикали
		[0, 4, 8],
		[2, 4, 6], // Варианты побед по диагонали
	];

	const onCellClickHandler = (index) => {
		const newFields = [...field];
		if (field[index].label === '' && !isGameEnded) {
			newFields[index] = {
				...newFields[index],
				label: currentPlayer,
			};
			dispatch(updateField(newFields));
			for (let i = 0; i < WIN_PATTERNS.length; i++) {
				const [a, b, c] = WIN_PATTERNS[i];
				if (
					newFields[a].label &&
					newFields[a].label === newFields[b].label &&
					newFields[a].label === newFields[c].label
				) {
					dispatch(endTheGame());
					return;
				}
			}
			if (newFields.every((cell) => cell.label !== '')) {
				dispatch(gameDraw());
				return;
			}
			dispatch(updatePlayer(currentPlayer));
		}
	};

	const props = {
		onCellClickHandler,
		field,
		currentPlayer,
		isGameEnded,
	};
	return <AppLayout {...props}></AppLayout>;
};

export default App;
