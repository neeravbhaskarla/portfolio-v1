import React from 'react'
import './NavBar.scss'
export default function NavBar(props) {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-left-logo">
                        <span>NB</span>
                    </div>
                </div>
                <div className="navbar-right">
                    <div className="navbar-right-projects" onClick={()=>props.scrollToProjects()}>
                        <span>Projects</span>
                    </div>
                    <div className="navbar-right-about" onClick={()=>props.scrollToAbout()}>
                        <span>About Me</span>
                    </div>
                    <div className="navbar-right-contact" onClick={()=>props.scrollToContact()}>
                        <span>Contact</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
