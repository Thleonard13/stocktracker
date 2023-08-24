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
        <a href='/#hero-section' onClick={handleLinkClick}><li>Home</li></a>
        <a href='/#market-section' onClick={handleLinkClick}><li>Market</li></a>
        <a href='/#about-us-section' onClick={handleLinkClick}><li>Features</li></a>
        <a href='/#join-us-section' onClick={handleLinkClick}><li>Join Us</li></a>
      </nav>
    </section>
  );
}

export default MobileMenu;
