import React from 'react'
import './AboutFeatureCard.css'

const AboutFeatureCard = () => {
  return (
    <div className='about-feature-card'>
        <i class="fa-solid fa-credit-card feature-icon"></i>
        <div className='feature-text'>
            <h4>CONNECT YOUR WALLET</h4>
            <p>Use your favorite banking apps to connect with our app.</p>
        </div>
    </div>
  )
}

export default AboutFeatureCard