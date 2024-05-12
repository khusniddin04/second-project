import React from 'react'
import "../styles/previousNext.css"
import { NavLink } from 'react-router-dom'
import previos_img from "../images/Path 2.svg"
import next_img from "../images/next.svg"
function PreviousNext({link, title1, title2, link2}) {
  return (
    <section className='previousNext'>
        <div className="container">
            <div className="previousNext__wrapper">
                <div className="previous">
                    <NavLink to={link}><img src={previos_img} alt="" /></NavLink>
                    <div className="previous__content">
                        <h4>{title1}</h4>
                        <p>Previous Project</p>
                    </div>
                </div>
                <div className="next">
                    <div className="next__content">
                        <h4>{title2}</h4>
                        <p>Next Project</p>
                    </div>
                    <NavLink to={link2}><img src={next_img} alt="" /></NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PreviousNext