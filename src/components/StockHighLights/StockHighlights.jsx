import React, { useState, useEffect } from 'react';
import './StockHighLights.css';
import fetchStockInfo from '../../Utilities/FetchStocks';

const StockHighlights = (props) => {
  const { symbol } = props;
  const [stockInfo, setStockInfo] = useState(null);
  const [todaysStats, setTodaysStats] = useState(null);
  const [percentChange, setPercentChange] = useState()

  useEffect(() => {

    // Fetches stock data from Alpha Vantage API and stores it in stockInfo
    fetchStockInfo(symbol)
      .then(data => {
        setStockInfo(data);
      })
      .catch(error => {
        console.error('Error fetching stock info:', error);
      });
  }, [symbol]);

  // formats the fetched data to be readable and calculates the percent difference
  useEffect(() => {
    if (stockInfo) {
      const dates = Object.keys(stockInfo["Time Series (Daily)"]);
      const todaysDate = dates[0];
      const todayData = stockInfo["Time Series (Daily)"][todaysDate];
      // format the data to be more readable
      const { "1. open": open, "4. close": close, "2. high": high, "3. low": low, "5. volume": volume } = todayData;
      setTodaysStats({ open, close, high, low, volume });

      // Calculate price change in percent using open and close prices
      const priceChange = close - open;
      const percent = ((priceChange / open) * 100).toFixed(2);
      setPercentChange(percent);
    }
  }, [stockInfo]);

  if (!todaysStats) {
    return null; // Don't render anything until data is fetched
  }

  return (
    <div className='stock-highlights'>
      <p>{stockInfo["Meta Data"]["2. Symbol"]}</p>
      <p>{todaysStats.close}</p>
      {/* return proper styling for a positive/negative percent change */}
      {percentChange <= 0 ? <p className='negative'>{percentChange}%</p> :
        <p className='positive'>+{percentChange}%</p>
      }
      <p className='disappear-on-mobile'>{todaysStats.volume}</p>
    </div>
  )
}

export default StockHighlights;


