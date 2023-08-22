import React from 'react'
import "./Market.css"
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'
import StockList from '../StockList/StockList'
import { useState } from 'react'

import fetchStockInfo from '../../Utilities/FetchStocks'

const Market = () => {

  const [ stockInfo, setStockInfo ] = useState()
  const [ errorMsg, setErrorMsg ] = useState()
  const [ isLoading, setIsLoading ] = useState(false)

  // fetches stock info from API
  const fetchStock = async (symbol) => {
    setStockInfo(null)
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const result = await fetchStockInfo(symbol);
      
      if (result["Error Message"]) {
        setErrorMsg('Sorry, that ticker symbol was not found.');
      } else {
        setStockInfo(result);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // This API does not seem to send back status codes
  // This makes displaying errors to the DOM more difficult. For now I will just log request results to the console

  return (
    <section id='market-section' className='section-padding'>
      <div id='market-header'>
        <h1 className='section-title'>Market Updates</h1>
        <p>Starting tracking stocks today and build your portfolio.</p>
      </div>
      <SearchBar fetchStock={fetchStock}/>
      {isLoading && <h2 className='loading'>Fetching Ticker Info...</h2>}
      {errorMsg && <div className='error-msg'><h4>{errorMsg}</h4></div>}
      {stockInfo && <SearchResult stockInfo={stockInfo}/>}
      <StockList />
    </section>
  )
}

export default Market