import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio' 
import Footer from './components/footer/Footer'
import SoundBar from './components/SoundBar'

const App = () => {
  return (
    <>
        <SoundBar />
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Footer />
    </>
  )
}

export default App