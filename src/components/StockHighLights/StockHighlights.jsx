import React, { useState, useEffect } from 'react';
import './StockHighLights.css'

const StockHighlights = (props) => {
  const { symbol, getStockInfo } = props;
  const [stockInfo, setStockInfo] = useState(null); // Initialize as null

  // useEffect(() => {
  //   const fetchStockInfo = async () => {
  //     const response = await getStockInfo(symbol);
  //     setStockInfo(response);
  //   };
  //   fetchStockInfo();
  // }, [symbol, getStockInfo]);

  // // Check if stockInfo has data before rendering
  // if (!stockInfo) {
  //   return null; // Don't render anything until data is fetched
  // }

  return (
    <a className='stock-highlights'>
      <p>Bitcoin</p>
      <p>$29327.00</p>
      <p>-0.40%</p>
      <p className='disappear-on-mobile'>$570,000,000</p>   
    </a>
  )
}

export default StockHighlights;
