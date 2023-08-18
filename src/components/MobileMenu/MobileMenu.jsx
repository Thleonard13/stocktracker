import React from 'react';
import './MobileMenu.css';

const MobileMenu = (props) => {
  const { isActive, toggleMenu } = props;

  const mobileMenuClasses = isActive ? 'mobile-menu' : 'mobile-menu hidden';

  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <section id="mobile-menu" className={mobileMenuClasses}>
      <nav>
        <li><a href='/#hero-section' onClick={handleLinkClick}>Home</a></li>
        <li><a href='/#market-section' onClick={handleLinkClick}>Market</a></li>
        <li><a href='/#about-us-section' onClick={handleLinkClick}>Features</a></li>
        <li><a href='/#join-us-section' onClick={handleLinkClick}>Join Us</a></li>
      </nav>
    </section>
  );
}

export default MobileMenu;
