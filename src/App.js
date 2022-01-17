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

  // function drawLine() {
  //   let path = pathRef.current
  //   let pathLength = path.getTotalLength()

  //   path.style.strokeDasharray = pathLength + ' ' + pathLength
  //   path.style.strokeDashoffset = pathLength

  //   window.addEventListener('scroll', () => {
  //     var scrollPercentage =
  //       (document.documentElement.scrollTop + document.body.scrollTop) /
  //       (document.documentElement.scrollHeight -
  //         document.documentElement.clientHeight)

  //     var drawLength = pathLength * scrollPercentage

  //     path.style.strokeDashoffset = pathLength - drawLength
  //   })
  // }

  // useEffect(() => {
  //   drawLine()
  // })

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])

  return (
    <div className='App'>
      <DotRing />
      {loading ? (
        <Splash />
      ) : (
        <>
          {' '}
          {/* <div class='line-container'>
            <svg
              width='393'
              height='1724'
              viewBox='0 0 393 1724'
              fill='none'
              preserveAspectRatio='xMidYMax meet'
            >
              <path
                ref={pathRef}
                d='M109 0.5V702.5C79.8333 731.667 20.9 772.5 18.5 702.5C16.1 632.5 127.833 659 184 681V1009.5C273.5 1000.5 437.4 962 377 880C316.6 798 255.5 845.833 232.5 880C290.667 822.667 401 702.6 377 681C347 654 109 575.5 109 777.5C109 939.1 109 1182.17 109 1283.5C101 1346.67 71.7 1482.1 18.5 1518.5C-34.7 1554.9 56.6667 1578 109 1585V1723.5'
                stroke='#ffff'
                stroke-width='4'
              />
            </svg>
          </div> */}
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
