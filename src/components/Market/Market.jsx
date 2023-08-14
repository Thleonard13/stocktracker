import React from 'react'
import "./Market.css"
import SearchBar from '../SearchBar/SearchBar'
import StockList from '../StockList/StockList'

const Market = () => {
  return (
    <section id='market-section' className='section-padding'>
      <div id='market-header'>
        <h1 className='section-title'>Market Updates</h1>
        <p>Starting tracking stocks today and build your portfolio.</p>
      </div>
      <SearchBar />
      <StockList />
    </section>
  )
}

export default Market