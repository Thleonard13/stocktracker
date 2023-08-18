import React from 'react'
import './AboutUs.css'
import vector from '../../assets/vector1.jpg'
import AboutFeatureCard from './AboutFeatureCard/AboutFeatureCard'

const AboutUs = () => {

    // contents of each feature card stored in an array to be passed down via props
    const featureCardContent = [
        {
            id: 1,
            title: "Connect Your Wallet",
            details: 'Use your favorite banking apps to connect with our app.',
            icon: 'fa-solid fa-wallet'
        },
        {
            id: 2,
            title: "Drive Your Collection",
            details: 'We make it easy to discover, invest, and manage.',
            icon: 'fa-solid fa-boxes-stacked'
        },
        {
            id: 3,
            title: "Fast Transactions",
            details: 'Stop waiting. We make investing immediate.',
            icon: 'fa-solid fa-bolt'
        },
        {
            id: 4,
            title:"Real-Time Data",
            details: 'Highly accurate updates are made daily.',
            icon: 'fa-solid fa-chart-simple'
        },
        {
            id: 5,
            title: "Latest Market News",
            details: 'Stay up to date with the most current market news.',
            icon: 'fa-solid fa-rss'
        },
        {
            id: 6,
            title: "Personalized Advice",
            details: 'Checkout our social media for the best peronal investment strategies.',
            icon: 'fa-solid fa-user'
        },

    ]

  return (
    <section id='about-us-section' className='section-padding'>
        <h1 className='section-title'>WHY <span className='gradient-text'>CHOOSE US</span></h1>
        <div className="feature-container">
            <div className='feature-column'>
                <AboutFeatureCard contents={featureCardContent[0]}/>
                <AboutFeatureCard contents={featureCardContent[1]}/>
                <AboutFeatureCard contents={featureCardContent[2]}/>
            </div>
            <div className='feature-column-2'>
                <img className='feature-img disappear-on-mobile' 
                    src={vector}
                    alt="stock price analytics chart"/>
            </div>
            <div className='feature-column'>
                <AboutFeatureCard contents={featureCardContent[3]}/>
                <AboutFeatureCard contents={featureCardContent[4]}/>
                <AboutFeatureCard contents={featureCardContent[5]}/>
            </div>
        </div>
    </section>
  )
}

export default AboutUs