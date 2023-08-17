import React from 'react'
import './JoinUs.css'

const JoinUs = () => {
  return (
    <section id='join-us-section' className='section-padding'>
        <h2 className='section-title'>JOIN THE <span className='gradient-text'>CONVERSATION</span></h2>
        <p>We're always sharing the best investment tips and secrets.</p>
        <div className='social-media-links'>
            <a href='https://www.facebook.com/' target='_blank'><i className="fa-brands fa-facebook"></i></a>
            <a href='https://twitter.com/' target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href='https://discord.com/' target='_blank'><i className="fa-brands fa-discord"></i></a>
            <a href='https://www.linkedin.com/in/thomas-leonard-6b63a326b/' target='_blank'><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </section>
  )
}

export default JoinUs