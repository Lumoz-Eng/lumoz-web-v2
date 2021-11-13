import React, { useState } from 'react'
import Logo from '../../assets/lumoz-light-logo.svg'
import { RiMenu2Line, RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import './navbar.css'

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#lumoz'>What is Lumoz</a>
    </p>
    <p>
      <a href='#possibility'>OpenAR</a>
    </p>
    <p>
      <a href='#features'>Case Studies</a>
    </p>
    <p>
      <a href='#blog'>Library</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false)
  return (
    <div className='lumoz__navbar'>
      <div className='lumoz__navbar-links'>
        <div className='lumoz__navbar-links_logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='lumoz__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='lumoz__navbar-sign'>
        <p>Community</p>
        <button type='button'>Contact</button>
      </div>
      <div className='lumoz__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => settoggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => settoggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className='lumoz__navbar-menu_container scale-up-center'>
            <div className='lumoz__navbar-menu_container-links'>
              <Menu />
              <div className='lumoz__navbar-menu_container-links-sign'>
                <p>Community</p>
                <button type='button'>Contact</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
