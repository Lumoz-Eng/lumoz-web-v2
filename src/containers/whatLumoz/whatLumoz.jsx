import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatLumoz.css'

const whatLumoz = () => {
  return (
    <div className='lumoz__whatLumoz section__margin' id='whatLumoz'>
      <div className='lumoz__whatLumoz-feature'>
        <Feature
          title='What is Lumoz'
          text='Lumoz studio is a tool which can be considered as a budget-friendly and time-efficient tool that can handle 3D objects in real-time in a live streaming environment.'
        />
      </div>
      <div className='lumoz__whatLumoz-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore More</p>
      </div>
      <div className='lumoz__whatLumoz-container'>
        <Feature
          title='Always look professional'
          text='Host a stable stream that is on-brand and smooth every time.'
        />
        <Feature
          title='No Software Downloads'
          text='Go live with guests from your browser in a few clicks.'
        />
        <Feature
          title='Multistreaming '
          text='Works seamlessly with Facebook, YouTube, Linkedin, Twitter, Twitch, and more.'
        />
      </div>
    </div>
  )
}

export default whatLumoz
