import react, { useState } from 'react'
import gradient from "./assets/gradient.png"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"


function App() {
  return (
    <>
      <div>

        <Navbar></Navbar>
        <img className="image-gradient" src={gradient} alt="Gradient" />
        <div className="layer-blur"></div>

        <Hero></Hero>
        

      </div>
    </>
  )
}

export default App
