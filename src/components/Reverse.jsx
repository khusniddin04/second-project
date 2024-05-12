import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/reverse.css"
function Reverse({img, title, text, link}) {
  return (
    <section className='reverse'>
        <div className="container">
            <div className="reverse__wrapper">
                <div className="reverse__content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <NavLink to={link}>VIEW PROJECT</NavLink>
                </div>
                <img src={img} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Reverse