import React from 'react'
import './NavBar.scss'
import {isMobile} from 'react-device-detect'
export default function NavBar() {
    return (
        <div className='navbar'>
            <div className="navbar-container">
                <div className="navbar-left">
                    <div className="navbar-left-logo">
                        {!isMobile?<span className='logo'>NB</span>:<h3 className='name'>Neerav Bhaskarla</h3>}
                    </div>
                </div>
            </div>
        </div>
    )
}
