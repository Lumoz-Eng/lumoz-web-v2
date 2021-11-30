import './App.css'

import { Article, Brand, CTA, Feature, Navbar, Achievement } from './components'
import {
  Footer,
  Blog,
  WhatLumoz,
  Possibility,
  Header,
  Features,
} from './containers'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatLumoz />
      <Features />
      <Possibility />
      <CTA />
      <Achievement />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
