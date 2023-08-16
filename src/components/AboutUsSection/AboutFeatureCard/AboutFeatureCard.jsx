import React from 'react'
import './AboutFeatureCard.css'

const AboutFeatureCard = (props) => {

  const { icon, title, details }  = props.contents

  return (
    <div className='about-feature-card'>
        <i className={icon + " feature-icon"}></i>
        <div className='feature-text'>
            <h4>{title}</h4>
            <p>{details}</p>
        </div>
    </div>
  )
}

export default AboutFeatureCard