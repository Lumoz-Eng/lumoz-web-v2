import React, { useState, useEffect } from 'react'
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
          <div className='gradient__bg'>
            <Navbar />
            <Header />
          </div>
          <Brand />
          <WhatLumoz />
          <Features />
          <Possibility />
          <Demo />
          <CTA />
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
