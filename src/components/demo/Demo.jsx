import React from 'react'
import './demo.css'
import demoImg from '../../assets/demo.gif'
import demoImg2 from '../../assets/demo3.gif'

const Demo = () => {
  return (
    <div className='demo_section section__padding'>
      <div className='demoimg_div'>
        <img src={demoImg} />
        <img src={demoImg2} />
      </div>
    </div>
  )
}

export default Demo
