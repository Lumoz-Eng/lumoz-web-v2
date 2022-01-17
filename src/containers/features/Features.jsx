import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'
const featuresdata = [
  {
    title: '3D Object Placement ',
    text: 'presenter uses 3D objects in their live stream, the 3D object should be positioned correctly. ',
  },
  {
    title: 'Support Hand Gesture',
    text: 'dealing with 3D objects in an Augmented reality space, gesture controls is a very important feature to have in a product. That’s why we introduce separate hand signals, for the users to have an interactive session with their audience',
  },
  {
    title: 'Realtime Date visualization',
    text: 'We also provide the facility to create customized 3D graphs and charts according to the users datasets.',
  },
  {
    title: '3D Object Library',
    text: 'LUMOZ provides a separate 3D model library where the users can import and save 3D objects which they can use in their live streaming.',
  },
  {
    title: 'IOT Device Support',
    text: 'We also introduce a special sensor based IOT device through this research.This camera mount device provides users a better tracking features It helps the users to have a parallel movement of the 3D object with the camera.',
  },
]

const Features = () => {
  return (
    <div className='lumoz_features section__padding' id='features'>
      <div className='lumoz__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
      </div>
      <div className='lumoz__features-container'>
        {featuresdata.map((item, index) => (
          <Feature title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default Features
