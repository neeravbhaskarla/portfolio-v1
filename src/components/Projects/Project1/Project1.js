import React from 'react'
import P1Image1 from '../../../assets/Images/P1Image1.png'
import P1Image2 from '../../../assets/Images/P1Image2.png'
import './Project1.scss'

export default function Project1() {
    return (
            <div className="project1">
                <div className="project1-container">
                        <div className="project1-name">
                            <span>E-Commerce</span>
                            <span>Website</span>
                        </div>
                        <div className="project1-description">
                            <span>A E-Commerce website made using</span>
                            <span>ReactJS, Redux, Tailwind CSS, Firebase.</span>
                        </div>
                        <div className="project1-image1">
                            <img src={P1Image1} alt=""/>
                        </div>
                        <div className="project1-image2">
                            <img src={P1Image2} alt=""/>
                        </div>
                </div>
            </div>
    )
}
