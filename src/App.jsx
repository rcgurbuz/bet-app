/* eslint-disable react/react-in-jsx-scope */
import Bulletin from './components/Bulletin';
import Basket from './components/Basket';
import { GlobalStyle } from './theme';
import { BasketProvider } from './context/BasketContext';

function App() {
	return (
		<BasketProvider>
			<Bulletin />
			<Basket />
			<GlobalStyle />
		</BasketProvider>
	);
}

export default App;
