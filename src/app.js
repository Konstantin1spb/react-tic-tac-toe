import { AppLayout } from './components/appLayout.module.js';
import { useState } from 'react';

const App = () => {
	const [currentPlayer, setCurrentPlayer] = useState('x');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState([
		{ id: 0, label: '' },
		{ id: 1, label: '' },
		{ id: 2, label: '' },
		{ id: 3, label: '' },
		{ id: 4, label: '' },
		{ id: 5, label: '' },
		{ id: 6, label: '' },
		{ id: 7, label: '' },
		{ id: 8, label: '' },
	]);

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

	const calcWinner = () => {
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (
				field[a].label &&
				field[a].label === field[b].label &&
				field[a].label === field[c].label
			) {
				setIsGameEnded(true);
			}
		}
	};

	const onClick = (index) => {
		if (field[index].label === '' && !isGameEnded) {
			const newFields = [...field];
			newFields[index] = { ...newFields[index], label: currentPlayer };
			setField(newFields);
			setCurrentPlayer(currentPlayer === 'x' ? '0' : 'x');
			console.log(field);
			calcWinner();
		}
	};

	const props = {
		currentPlayer,
		setCurrentPlayer,
		isGameEnded,
		setIsGameEnded,
		isDraw,
		setIsDraw,
		field,
		setField,
		onClick,
	};
	return <AppLayout {...props}></AppLayout>;
};

export default App;
