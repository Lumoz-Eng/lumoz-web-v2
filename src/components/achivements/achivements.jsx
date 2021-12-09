import React from 'react'
import './Achivements.css'

import NBQSA from '../../assets/nbqsa.png'
import ICAC from '../../assets/icac.jpg'

const achivements = () => {
  return (
    <div className='achivement section__padding' id='achievement'>
      <div className='achivement-heading'>
        <h1 className='gradient__text'>Our Achivements</h1>
      </div>

      <div id='cover'>
        <img src={NBQSA} />
        
        <img src={ICAC} />
      </div>
    </div>
  )
}

export default achivements
