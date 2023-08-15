import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav id='navbar'>
        <div id='logo'>
          <a>
           <h1>InstaVest</h1> 
          </a>
        </div>
        <ul id='navlinks'>
            <li><a>Home</a></li>
            <li><a>Market</a></li>
            <li><a>Join</a></li>
        </ul>
    </nav>
    
  )
}

export default Navbar