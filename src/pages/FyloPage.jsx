import React from 'react'
import hero_img from "../images/hero_img4.jpg"
import Hero from '../components/Hero'
import Info from '../components/Info'
import PreviousNext from '../components/PreviousNext'
import Interested from '../components/Interested'
import fylo_img from "../images/fylo_img.png"
function FyloPage() {
  return (
    <main>
      <Hero img={hero_img}/>
      <Info img={fylo_img} title="Fylo" text="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes." />
      <PreviousNext link="/insure" title1="Insure" link2="/manage" title2="Manage"/>
      <Interested/>
    </main>
  )
}

export default FyloPage