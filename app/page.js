import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function page() {
  return (
    <div>
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </div>
  )
}

export default page