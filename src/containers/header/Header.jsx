import React from 'react'
import './header.css'

import Lumoz from '../../assets/demo2.gif'

const Header = () => {
  return (
    <div className='lumoz__header section__padding' id='home'>
      <div className='lumoz__header-content'>
        <h1 className='gradient__text'>
          Lumoz Studio Change your Digital Life
        </h1>
        <p>
          Hey there, 👋 Future generations of the Metaverse! This is our
          augmented reality based solution for a smooth real-time live media
          production.
        </p>
        <div className='lumoz__header-content__input'>
          <input type='email' placeholder='get email updates' />
          <button type='button'>Get Started</button>
        </div>
      </div>
      <div className='lumoz__header-image'>
        <img src={Lumoz} alt='lumoz' />
      </div>
    </div>
  )
}

export default Header
