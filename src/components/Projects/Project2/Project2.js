import React from 'react'
import P2Image1 from '../../../assets/Images/P2Image1.png'
import P2Image2 from '../../../assets/Images/P2Image2.png'
import './Project2.scss'
export default function Project2() {
    return (
        <div className="project2">
            <div className="project2-container">
                    <div className="project2-name">
                        <span>Group Chat</span>
                        <span>Application</span>
                    </div>
                    <div className="project2-description">
                        <span>A Group Chat application made with ReactJS, Redux, Styled-Components and Firebase with Google sign in.</span>
                        <span>A Slack type chat application with custom groups.</span>
                    </div>
                    <div className="project2-image1">
                        <img src={P2Image1} alt=""/>
                    </div>
                    <div className="project2-image2">
                        <img src={P2Image2} alt=""/>
                    </div>
            </div>
        </div>
    )
}
