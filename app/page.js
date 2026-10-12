import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'

function page() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Footer></Footer>
    </div>
  )
}

export default page