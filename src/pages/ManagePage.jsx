import React from 'react'
import Hero from '../components/Hero'
import hero_img1 from "../images/hero_img1.jpg"
import manage_info_img from "../images/manage_info.png"
import Info from '../components/Info'
import PreviousNext from '../components/PreviousNext'
import Interested from '../components/Interested'
function ManagePage() {
  return (
    <main>
      <Hero img={hero_img1}/>
      <Info title="Manage" text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider." img={manage_info_img} />
      <PreviousNext link="/fylo" link2="/bookmark" title1="Fylo" title2="Bookmark" />
      <Interested/>
    </main>
  )
}

export default ManagePage