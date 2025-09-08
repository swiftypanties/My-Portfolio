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
        <spline-viewer data-aos="fade-left" data-aos-duration="1500" className="robot-3d" url="https://prod.spline.design/fvuYUuyJgNvKy2Qy/scene.splinecode"></spline-viewer>
        
      </div>
    </>
  )
}

export default App
