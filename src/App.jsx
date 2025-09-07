import react, { useState } from 'react'
import gradient from "./assets/gradient.png"
import Navbar from "./Components/Navbar/Navbar"


function App() {
  return (
    <>
      <div>
       <Navbar></Navbar>
       <main>
        <img className="image-gradient" src={gradient} alt="Gradient" />
        <div className="layer-blur"></div>
       </main>
      </div>
    </>
  )
}

export default App
