import React, { useState, useEffect, useRef } from 'react'
import './App.css'

import {
  Article,
  Brand,
  CTA,
  Feature,
  Navbar,
  Achievement,
  Team,
  Demo,
  Splash,
  DotRing,
} from './components'
import {
  Footer,
  Blog,
  WhatLumoz,
  Possibility,
  Header,
  Features,
} from './containers'

function App() {
  const [loading, setLoading] = useState(true)

  const pathRef = useRef()

  useEffect(() => {
    let path = pathRef.current
    let pathLength = path.getTotalLength()

    path.style.strokeDasharray = pathLength + ' ' + pathLength
    path.style.strokeDashoffset = pathLength

    window.addEventListener('scroll', () => {
      var scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)

      var drawLength = pathLength * scrollPercentage

      path.style.strokeDashoffset = pathLength - drawLength
    })
  })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className='App'>
      <div class='line-container'>
        <svg
          width='494'
          height='1778'
          viewBox='0 0 494 1778'
          fill='none'
          preserveAspectRatio='xMidYMax meet'
        >
          <path
            ref={pathRef}
            d='M237.5 0V669H5L254.5 368.5V1003L489 669L237.5 683.5V1777.5'
            stroke='#777'
            stroke-width='4'
          />
        </svg>
      </div>
      <DotRing />
      {loading ? (
        <Splash />
      ) : (
        <>
          {' '}
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <CTA />
          <Brand />
          <WhatLumoz />
          <Features />
          <Demo />
          <Achievement />
          <Team />
          <Blog />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
