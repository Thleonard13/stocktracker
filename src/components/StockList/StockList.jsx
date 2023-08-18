import React from 'react'
import './StockList.css'
import StockHighlights from '../StockHighLights/StockHighlights'

const StockList = (props) => {

  const { getStockInfo } = props

  const popularTickers = [
    'AAPL',
    'TSLA',
    'MSFT',
    'META'
  ]


  return (
    <div className='stock-list'>
        <h2>Popular Investments</h2>
        <div className='list-container'>
            <div className='stock-list-header'>
                <p>Ticker</p>
                <p>Price</p>
                <p>24h Change</p>
                <p className='disappear-on-mobile'>Volume</p>
            </div>
            <StockHighlights symbol={popularTickers[0]} getStockInfo={getStockInfo}/>
            <StockHighlights symbol={popularTickers[1]} getStockInfo={getStockInfo}/>
            <StockHighlights symbol={popularTickers[2]} getStockInfo={getStockInfo}/>
            <StockHighlights symbol={popularTickers[3]} getStockInfo={getStockInfo}/>
        </div>
    </div>
  )
}

export default StockList