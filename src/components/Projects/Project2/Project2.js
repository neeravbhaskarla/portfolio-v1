import React from 'react'
import P2Image2 from '../../../assets/Images/P2Image2.png'
import './Project2.scss'
export default function Project2() {
    return (
        <div className="projects-item-wrapper">
            <div className="project2">
                <div className="project2-wrapper">
                        <div className="project2-name">
                            <h6>Group Chat</h6>
                            <span>Application</span>
                        </div>
                        <div className="project2-image2" >
                            <img src={P2Image2} alt="" data-scroll/>
                        </div>
                </div>
            </div>
        </div>
    )
}
