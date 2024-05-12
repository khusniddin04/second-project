import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/interested.css"
function Interested({title, btn_text,}) {
  return (
    <section className='interested'>
        <div className="container">
            <div className="interested__wrapper">
                <h2>Interested in doing a project together?</h2>
                <div className="interested__line">
                </div>
                <NavLink to="/contact">Contact me</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Interested