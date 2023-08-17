import React from 'react'
import "./Market.css"
import SearchBar from '../SearchBar/SearchBar'
import SearchResult from '../SearchResult/SearchResult'
import StockList from '../StockList/StockList'
import { useState } from 'react'

const Market = () => {

  const [ foundStock, setFoundStock ] = useState(
    // EXAMPLE DATA
    // {
    //   Metadata: { Symbol: 'AAPL'},
    //   Results: [{Open: 1, Close: 2, High: 3, Low: 4, Volume: 5}]
    // }
  )
  const [ errorMsg, setErrorMsg ] = useState()

  // today's date formatted for API query
  let endDate = new Date().toJSON().slice(0, 10);

  // yesterday's date formatted for API query
  const getStartDate = () => {
    let yesterday = new Date()
    yesterday.setDate(yesterday.getDate() + - 1)
    return JSON.stringify(yesterday).slice(1,11)
  }
  const startDate = getStartDate();

  // search API for stock using inputted ticker and today's date
  const getStockInfo = async (queryString) => {

    setFoundStock(null);
    setErrorMsg(null)
    const url = `https://apistocks.p.rapidapi.com/daily?symbol=${queryString}&dateStart=${startDate}&dateEnd=${endDate}`;
    const options = {
      method: 'GET',
      headers: {
        // API KEY REMOVED FOR GITHUB
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'apistocks.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if(result.Results.length <= 0) {
        setErrorMsg("No matching ticker symbol was found")
      }
      console.log(result);
      if(result.Results.length >= 1) { 
      setFoundStock(result);
      }
    } catch (error) {
      setErrorMsg(error)
      console.error(error);
    }
  }

  return (
    <section id='market-section' className='section-padding'>
      <div id='market-header'>
        <h1 className='section-title'>Market Updates</h1>
        <p>Starting tracking stocks today and build your portfolio.</p>
      </div>
      <SearchBar getStockInfo={getStockInfo} />
      {errorMsg && <div><h4>{errorMsg}</h4></div>}
      {foundStock && <SearchResult stockInfo={foundStock}/>}
      <StockList />
    </section>
  )
}

export default Market