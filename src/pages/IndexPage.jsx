import React from 'react'
import Part from '../components/Part'
import part_img from "../images/part_img.png"
import part_img2 from "../images/part_img2.png"
import Reverse from '../components/Reverse'
import reverse_img from "../images/reverse_img.png"
import reverse_img2 from "../images/reverse_img2.png"
import Interested from '../components/Interested'
function IndexPage() {
  return (
    <main>
      <Part img={part_img} title="Manage" text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider." link="/manage"/>
      <Reverse img={reverse_img} title="Bookmark" text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section." link="/bookmark"/>
      <Part img={part_img2} title="Insure" text="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation." link="/insure"/>
      <Reverse img={reverse_img2} title="Fylo" text="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes." link="/fylo"/>
      <Interested/>
    </main>
  )
}

export default IndexPage