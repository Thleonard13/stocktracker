// function for fetching stock information from API
const fetchStockInfo = async (symbol) => {
    const url = `https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&datatype=json`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
			'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		// console.log('STOCK FETCHED: ',result);
		return result

	} catch (error) {
		console.error(error);
	}
}

export default fetchStockInfo;