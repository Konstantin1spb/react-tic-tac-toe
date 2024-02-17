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
	return (
		<AppLayout
			field={field}
			setField={setField}
			isDraw={isDraw}
			setIsDraw={setIsDraw}
			isGameEnded={isGameEnded}
			setIsGameEnded={setIsGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
		></AppLayout>
	);
};

export default App;
