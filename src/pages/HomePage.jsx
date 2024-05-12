import React from 'react'
import HomeHero from '../components/HomeHero'
import About from '../components/About'
import Interested from '../components/Interested'

function HomePage() {
  return (
    <main>
      <HomeHero/>
      <About/>  
      <Interested/>
    </main>
  )
}

export default HomePage