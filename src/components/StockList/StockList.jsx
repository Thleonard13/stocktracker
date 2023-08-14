import React from 'react'
import './StockList.css'
import StockHighlights from '../StockHighLights/StockHighlights'

const StockList = () => {
  return (
    <div className='stock-list'>
        <h2>Popular Investments</h2>
        <div className='list-container'>
            <div className='stock-list-header'>
                <p>Ticker</p>
                <p> Price</p>
                <p>24h Change</p>
                <p>Market Cap</p>
            </div>
            <StockHighlights />
            <StockHighlights />
            <StockHighlights />
            <StockHighlights />
            <StockHighlights />
        </div>
    </div>
  )
}

export default StockList