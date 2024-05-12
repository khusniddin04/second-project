import React from 'react'
import hero_img from "../images/hero_img2.png"
import Hero from '../components/Hero'
import Info from '../components/Info'
import bookmark_img from "../images/bookmark_img.png"
import PreviousNext from '../components/PreviousNext'
import Interested from '../components/Interested'
function BookMarkPage() {
  return (
    <main>
      <Hero img={hero_img}/>
      <Info title="Bookmark" text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section." img={bookmark_img}/>
      <PreviousNext link="/manage" title1="Manage" link2="/insure" title2="Insure"/>
      <Interested/>
    </main>
  )
}

export default BookMarkPage