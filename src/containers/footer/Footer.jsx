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
      <p>Subscribe Our News Letter</p>
    </div>

    <div className='social-media-links'>
      <a href='#' className='fa fa-facebook'></a>
      <a href='#' className='fa fa-twitter'></a>
      <a href='#' className='fa fa-google'></a>
      <a href='#' className='fa fa-linkedin'></a>
      <a href='#' className='fa fa-youtube'></a>
      <a href='#' className='fa fa-instagram'></a>
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
        <p>About</p>
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
        <p>Malabe , SriLanka</p>
        <p>xxx-xxxxx</p>
        <p>lumoz.studio@gmail.com</p>
      </div>
    </div>

    <div className='lumoz__footer-copyright'>
      <p>@{new Date().getFullYear()} Lumoz. All rights reserved.</p>
    </div>
  </div>
)

export default Footer
