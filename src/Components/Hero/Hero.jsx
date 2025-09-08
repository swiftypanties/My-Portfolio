import React from 'react';
import "./Hero.css";

function Hero() {
    return (
        <main>
            <div className="content">
                <div className="tag-box">
                    <div className="tag">INTRODUCING</div>
                </div>
                <h1>EMAIL FOR<br /> DEVELOPER</h1>

                <p className="description">
                    this is my portfolio website ....
                </p>
                <div className="buttons">
                    <a href="#" className="btn-get-started">Documentation &gt;</a>
                    <a href="#" className="btn-signing-main">Get started &gt;</a>
                </div>
            </div>
        </main>
    )
}

export default Hero