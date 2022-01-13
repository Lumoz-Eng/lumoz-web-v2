import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature'
const featuresdata = [
  {
    title: '3D Object Placement ',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Support Hand Gesture',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'Realtime Date visualization',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
  },
  {
    title: 'IOT Device Support',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
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
