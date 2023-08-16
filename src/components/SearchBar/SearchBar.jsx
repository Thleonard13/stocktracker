import React from 'react'
import { useState } from 'react'
import './SearchBar.css'

const SearchBar = (props) => {

  const  [query, setQuery] = useState('');

  return (
    <div id='search-bar'>
        <input 
            value={query}
            onChange={(e) => setQuery(e.target.value.toUpperCase())}
            placeholder='search ticker symbol'
        />
        <i className="fa-solid fa-magnifying-glass" onClick={() => props.getStockInfo(query)}></i>
    </div>
  )
}

export default SearchBar