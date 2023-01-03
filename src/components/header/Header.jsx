import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Ardaniah</h1>
        <h5 className="text-light">Aspiring Data Scientist | AI Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#portfolio" className='scroll__down'>Scroll Down to Portfolio</a>
      </div>
    </header>
  )
}

export default Header