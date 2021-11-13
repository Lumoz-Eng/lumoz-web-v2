import React from 'react'
import './header.css'

import Lumoz from '../../assets/lumoz.png'

const Header = () => {
  return (
    <div className='lumoz__header section__padding' id='home'>
      <div className='lumoz__header-content'>
        <h1 className='gradient__text'>
          Lumoz Studio Change your Digital Life
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
          deleniti adipisci officiis similique odit, quo culpa, unde voluptatem
          repellendus optio veritatis ipsam quidem. Vitae nostrum veniam
          temporibus necessitatibus distinctio blanditiis.
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
