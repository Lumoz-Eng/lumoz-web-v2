import React from 'react'
import './demo.css'
import demoImg from '../../assets/demo.gif'

const Demo = () => {
  return (
    <div className='demo_section section__padding'>
      <div className='demoimg_div'>
        <img src={demoImg} />
      </div>
    </div>
  )
}

export default Demo
