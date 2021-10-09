import React from 'react'
import NavBar from './NavBar/NavBar'
import Main from './Main/Main'

export default function Home(props) {
    return (
        <div className="home-container">
            <NavBar {...props}/>
            <Main/>
        </div>
    )
}
