import React from 'react';
import './SearchResult.css';

const SearchResult = (props) => {

  const { stockInfo } = props;

  const symbol = stockInfo["Meta Data"]["2. Symbol"];
  
  // Access the data for the first date in the stockInfo object
  const extractTodaysInfo = () => {
    const dates = Object.keys(stockInfo["Time Series (Daily)"]);
    const today = dates[0];
    const todayData = stockInfo["Time Series (Daily)"][today];
    // format the data to be more readable
    const { "1. open": open, "4. close": close, "2. high": high, "3. low": low, "5. volume": volume } = todayData;
    return { open, close, high, low, volume };
  }


  const today = extractTodaysInfo();

  // calculate price change in percent using open and close prices
  const percentChange = (((today.close - today.open) / today.open) * 100).toFixed(2);

  return (
    <section id='search-result-section'>
      <div className='search-result-card'>
        <div className='result-card-left'>
          <h2 className='result-ticker'>{symbol}</h2>
          <div className='change-info'>
            <h4>Today</h4>
            {/* return proper styling for a positive/negative percent change */}
            {percentChange <= 0 ? <p className='negative percent-chg'>{percentChange}%</p> :
              <p className='positive percent-chg'>+{percentChange}%</p>
            }
          </div>
        </div>
        <div className='result-details'>
          <h4>Today's Stats:</h4>
          <p>Open: {today.open}</p>
          <p>Close: {today.close}</p>
          <p>High: {today.high}</p>
          <p>Low: {today.low}</p>
          <p>Volume: {today.volume}</p>
        </div>
      </div>
    </section>
  );
}

export default SearchResult;
