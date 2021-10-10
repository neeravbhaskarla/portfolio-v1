import React from 'react'
import P1Image1 from '../../../assets/Images/P1Image1.png'
import P1Image2 from '../../../assets/Images/P1Image2.png'
import './Project1.scss'

export default function Project1() {

    return (
        <div className="projects-item-wrapper">
            <div className="project1">
                <div className="project1-wrapper">
                        <div className="project1-name">
                            <h6>E-Commerce</h6>
                            <span>W E B S I T E</span>
                        </div>
                        <div className="project1-image1">
                            <img src={P1Image1} alt="" data-scroll/>
                        </div>
                        <div className="project1-image2">
                            <img src={P1Image2} alt="" data-scroll/>
                        </div>
                </div>
            </div>
        </div>
    )
}
