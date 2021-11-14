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
          title='3D Modal Placement'
          text='Takes the identified point and uses it to place the 3D Object'
        />
        <Feature
          title='Gesture Detection'
          text='Allow users to communicate with the 3D objects with hand gestures'
        />
        <Feature
          title='Point Tracking '
          text='The points on the real world environment will be identified and adjust the point according to the camera movement.'
        />
      </div>
    </div>
  )
}

export default whatLumoz
