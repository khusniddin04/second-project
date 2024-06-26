import React from 'react'
import "../styles/homeHero.css"
import down from "../images/down.svg"
import bg from "../images/home_bg.jpg"
import responsive_bg from "../images/responsive_home_bg.png"
import { NavLink, useNavigate } from 'react-router-dom'
function HomeHero() {
    let navigation = useNavigate()
    function Navigation() {
        let path = "/about"
        navigation(path)
    }
  return (
    <section className='homeHero'>
        <div className="container">
            <div className="homeHero__card">
                <img className='home_img' src={bg} alt="" />
                <img className='responsive_img' src={responsive_bg} alt="" />
                <div className="homeHero__content">
                    <h2>Hey, I’m Alex Spencer and I love building beautiful websites</h2>
                    <div className="homeHero__link">
                        <NavLink onClick={Navigation}><img src={down} alt=""/></NavLink>
                        <NavLink onClick={Navigation}>About Me</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHero