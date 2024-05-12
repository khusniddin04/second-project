import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/part.css"
function Part({img,title,text,link}) {
  return (
    <section className='part'>
        <div className="container">
            <div className="part__wrapper">
                <img src={img} alt="" />
                <div className="part__content">
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <NavLink to={link}>VIEW PROJECT</NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Part