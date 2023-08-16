import React from 'react'
import './SearchResult.css'

const SearchResult = (props) => {

  const stockInfo = props.stockInfo;
  const { High, Low, Open, Close, Volume} = stockInfo.Results[0]

  // calculate price change in percent using open and close prices
  const percentChange = (((Close - Open) / Open) * 100).toFixed(2)

  return (
    <div id='search-result'>
        <h2>{stockInfo.Metadata.Symbol}</h2>
        <p>Today's Change</p>
        {percentChange <= 0? <p className='negative'>{percentChange}</p>:
          <p className='positive'>+{percentChange}</p>
        }
        <div className='searched-stock-details'>
          <h4>Today's Stats:</h4>
          <p>Open: {Open}</p>
          <p>Close: {Close}</p>
          <p>High: {High}</p>
          <p>Low: {Low}</p>
          <p>Volume: {Volume}</p>
        </div>
    </div>
  )
}

export default SearchResult