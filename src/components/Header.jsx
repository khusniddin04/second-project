import React, { useRef } from 'react'
import "../styles/header.css"
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.svg"
import menu from "../images/mennu.svg"
import close from "../images/close.svg"
function Header() {
  let modal = useRef()
  let menu2 = useRef()
  let close_x = useRef()
  function openBurger() {
    modal.current.classList.toggle("open_modal")
    menu2.current.classList.add("none")
    close_x.current.classList.add("close_x")
  }
  function closeBurger() {
    modal.current.classList.remove("open_modal")
    menu2.current.classList.remove("none")
    close_x.current.classList.remove("close_x")
  }
  function closeModal() {
    menu2.current.classList.remove("none")
    close_x.current.classList.remove("close_x")
    modal.current.classList.remove("open_modal")
  }
  return (
    <header className='header'>
      <div className="container">
          <div className="header__wrapper">
            <NavLink to="/"><img src={logo} alt="Our website logo"/></NavLink>
            <div ref={modal} className="modal_bg">
              <div className="modal">
                <nav className='modal_nav'>
                  <ul onClick={closeModal} className='modal_list'>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/contact">CONTACT ME</NavLink></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div onClick={openBurger} className='menu' >
              <img  ref={menu2}  src={menu} alt="" />
            </div>
            <div ref={close_x} onClick={closeBurger} className='close_menu'>
              <img  src={close} alt="" />
            </div>
            <nav className='header_nav'>
              <ul className='header__list'>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                <li><NavLink to="/contact">CONTACT ME</NavLink></li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  )
}

export default Header