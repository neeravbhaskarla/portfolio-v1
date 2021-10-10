import React from 'react'
import './NavBar.scss'
export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-left-logo">
                        <span>NB</span>
                    </div>
                </div>
                {/* <div className="navbar-right">
                    <div className="navbar-right-projects">
                        <a href="#projects-container">Projects</a>
                    </div>
                    <div className="navbar-right-about">
                        <a href="#about-container">About Me</a>
                    </div>
                    <div className="navbar-right-contact">
                        <a href="#contact-container">Contact</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
