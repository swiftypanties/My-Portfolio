import React from 'react'
import logo from '../../assets/Logo.png'
import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt="Logo" />
            <ul className="navbar-menu">
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="connect">Connect <span>with</span> me</div>
        </div>
    )  
}

export default Navbar