import React from 'react'
import logo from '../../assets/Logo.png'
import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt="Logo" />
            
            <nav className="navbar-menu">
                <a href="#">Home</a>
                <a href="#">About me</a>
                <a href="#">Portfolio</a>
            </nav>
            <button className="connect"><span>Connect <span className="with">with</span> me</span></button>
        </div>
    )  
}

export default Navbar