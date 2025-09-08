import React from 'react'
import logo from '../../assets/Logo.png'
import './Navbar.css'

function Navbar(){

    const createSpannedText = (text) => {
        return text.split('').map((char, index) => (
            <span key={index} className={`char char-${index}`}>
                {char === ' ' ? '\u00A0' : char}
            </span>
        ));
    };

    return(
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt="Logo" />
            
            <nav className="navbar-menu">
                <a href="#" className="nav-item" data-item="1">
                    {createSpannedText("Home")}
                </a>
                <a href="#" className="nav-item" data-item="2">
                    {createSpannedText("About me")}
                </a>
                <a href="#" className="nav-item" data-item="3">
                    {createSpannedText("Portfolio")}
                </a>
            </nav>
            <button className="btn">Connect <span className="with">with</span> me</button>
        </div>
    )  
}

export default Navbar