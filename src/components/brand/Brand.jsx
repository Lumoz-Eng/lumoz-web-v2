import React from 'react'
import './brand.css'
import { ai, webgl, nodejs, mediapipe, reactjs } from './import'

const Brand = () => {
  return (
    <div className='lumoz__brand section__padding'>
      <div>
        <img src={reactjs} alt='reactjs' />
      </div>
      <div>
        <img src={ai} alt='ai' />
      </div>
      <div>
        <img src={mediapipe} alt='mediapipe' />
      </div>
      <div>
        <img src={nodejs} alt='nodejs' />
      </div>
      <div>
        <img src={webgl} alt='webgl' />
      </div>
    </div>
  )
}

export default Brand
