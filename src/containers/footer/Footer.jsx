import React from 'react'
import lumozLogo from '../../assets/lumoz-light-logo.svg'

import './footer.css'

const Footer = () => (
  <div className='lumoz__footer section__padding'>
    <div className='lumoz__footer-heading'>
      <h1 className='gradient__text'>
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className='lumoz__footer-btn'>
      <p>Request Early Access</p>
    </div>

    <div className='lumoz__footer-links'>
      <div className='lumoz__footer-links_logo'>
        <img src={lumozLogo} alt='lumoz_logo' />
        <p>Change your Digital Life !</p>
      </div>
      <div className='lumoz__footer-links_div'>
        <h4>Links</h4>
        <p>Home</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className='lumoz__footer-links_div'>
        <h4>Other</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Help</p>
      </div>
      <div className='lumoz__footer-links_div'>
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className='lumoz__footer-copyright'>
      <p>@{new Date().getFullYear()} Lumoz. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
