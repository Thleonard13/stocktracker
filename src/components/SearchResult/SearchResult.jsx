import React from 'react'
import './SearchResult.css'

const SearchResult = (props) => {

  const stockInfo = props.stockInfo;
  const { High, Low, Open, Close, Volume} = stockInfo.Results[0]

  // calculate price change in percent using open and close prices
  const percentChange = (((Close - Open) / Open) * 100).toFixed(2)

  return (
    <section id='search-result-section'>
      <div className='search-result-card'>
          <div className='result-card-left'>
            <h2 className='result-ticker'>{stockInfo.Metadata.Symbol}</h2>
            <div className='change-info'>
            <h4>Today</h4>
            {/* return proper styling for a positive/negative percent change */}
            {percentChange <= 0? <p className='negative percent-chg'>{percentChange}%</p>:
              <p className='positive percent-chg'>+{percentChange}%</p>
            }
            </div>
          </div>
          <div className='result-details'>
            <h4>Today's Stats:</h4>
            <p>Open: {Open}</p>
            <p>Close: {Close}</p>
            <p>High: {High}</p>
            <p>Low: {Low}</p>
            <p>Volume: {Volume}</p>
          </div>
      </div>
    </section>
  )
}

export default SearchResult