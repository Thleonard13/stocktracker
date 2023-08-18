import React from 'react'
import { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {

  const  [query, setQuery] = useState('');

  // fetches stock info using ticker in the search bar
  const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter'){
      props.getStockInfo(query)
    }
  };

  return (
    <div id='search-bar'>
        <input 
            value={query}
            onChange={(e) => setQuery(e.target.value.toUpperCase())}
            onKeyDown={handleEnterKeyPress}
            placeholder='search ticker symbol'
        />
        <i className="fa-solid fa-magnifying-glass" onClick={() => props.getStockInfo(query)}></i>
    </div>
  )
}

export default SearchBar