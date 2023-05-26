/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from 'react';
import Bulletin from './components/Bulletin';
import Basket from './components/Basket';
import { GlobalStyle } from './theme';
import { BasketProvider } from './context/BasketContext';

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://nesine-case-study.onrender.com/bets')
			.then(response => response.json())
			.then(data => {
				setData(data);
			});
	}, []);

	return (
		<BasketProvider>
			<Bulletin data={data} />
			<Basket />
			<GlobalStyle />
		</BasketProvider>
	);
}

export default App;
