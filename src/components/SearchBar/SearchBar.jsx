import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div id='search-bar'>
        <input 
            placeholder='search ticker symbol'
        />
        <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default SearchBar