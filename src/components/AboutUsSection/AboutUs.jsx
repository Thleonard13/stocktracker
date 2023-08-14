import React from 'react'
import './AboutUs.css'
import AboutFeatureCard from './AboutFeatureCard/AboutFeatureCard'

const AboutUs = () => {
  return (
    <section id='about-us-section' className='section-padding'>
        <h1 className='section-title'>WHY CHOOSE US</h1>
        <div className="feature-container">
            <div className='feature-column'>
                <AboutFeatureCard />
                <AboutFeatureCard />
                <AboutFeatureCard />
            </div>
            <div className='feature-column'>
                
            </div>
            <div className='feature-column'>
                <AboutFeatureCard />
                <AboutFeatureCard />
                <AboutFeatureCard />
            </div>
        </div>
    </section>
  )
}

export default AboutUs