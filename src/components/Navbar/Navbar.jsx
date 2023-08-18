import React from 'react'
import './Navbar.css'

const Navbar = (props) => {

  const toggleMenu = props.toggleMenu;

  return (
    <nav id='navbar'>
        <div id='logo'>
          <a>
           <h2>InstaVest</h2> 
          </a>
        </div>
        <ul id='navlinks' className='disappear-on-tablet '>
            <li><a href='/#hero-section'>Home</a></li>
            <li><a href='/#market-section'>Market</a></li>
            <li><a href='/#about-us-section'>Features</a></li>
            <li><a href='/#join-us-section'>Join Us</a></li>
        </ul>
        <div className='social-navlinks disappear-on-tablet'>
            <a href='https://twitter.com/' target="_blank"><i className="fa-brands fa-twitter"></i></a>
            <a href='https://discord.com/' target="_blank"><i className="fa-brands fa-discord"></i></a>
        </div>
        <div id="mobile-icon">
            <i onClick={() => toggleMenu()} className="fa-solid fa-bars menu-btn"></i>
        </div>
    </nav>
  )
}

export default Navbar