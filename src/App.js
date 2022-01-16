import React from 'react'
import { Brand, Navbar, CTA } from './components'
import { Blog, Features, Header, Footer, Possibility, WhatGPT3 } from './containers'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
