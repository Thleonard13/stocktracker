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
            <li><a href='/#hero-section'>Home</a></li>
            <li><a href='/#market-section'>Market</a></li>
            <li><a href='/#about-us-section'>Features</a></li>
            <li><a href='/#join-us-section'>Join Us</a></li>
        </ul>
        <div className='social-navlinks'>
            <a href='https://twitter.com/' target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href='https://discord.com/' target="_blank"><i className="fa-brands fa-discord"></i></a>
        </div>
        
    </nav>
    
  )
}

export default Navbar