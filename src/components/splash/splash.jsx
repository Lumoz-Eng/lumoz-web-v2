import React from 'react'
import './splash.css'
import Loader from '../../assets/lumoz.png'

const splash = () => {
  return (
    <div className='splash-screen'>
      <img src={Loader}></img>
      <div className='splash-text'>{/* <h1>Lumoz Studio</h1> */}</div>
    </div>
  )
}

export default splash
