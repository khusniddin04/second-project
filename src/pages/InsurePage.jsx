import React from 'react'
import hero_img from "../images/hero_img3.png"
import Hero from '../components/Hero'
import Info from '../components/Info'
import insure_img from "../images/insure_img.png"
import PreviousNext from '../components/PreviousNext'
import Interested from '../components/Interested'
function InsurePage() {
  return (
    <main>
      <Hero img={hero_img}/>
      <Info title="Insure" text="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation." img={insure_img}/>
      <PreviousNext link="/bookmark" title1="Bookmark" link2="/fylo" title2="Fylo"/>
      <Interested/>
    </main>
  )
}

export default InsurePage