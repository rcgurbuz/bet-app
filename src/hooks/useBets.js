import { useEffect, useState } from 'react';
import { BET_API_URL } from '../constants';

export const useBets = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;

		fetch(BET_API_URL, { signal })
			.then(response => response.json())
			.then(data => {
				setData(data);
			});

		return () => controller.abort();
	}, []);

	return data;
};

export default useBets;
