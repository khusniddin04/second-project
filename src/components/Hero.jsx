import React from 'react'
import "../styles/hero.css"
function Hero({img}) {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero_img">
                <img src={img} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Hero