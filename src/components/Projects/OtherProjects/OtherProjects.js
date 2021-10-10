import React, { useRef} from 'react'
import useOnScreen from '../../../hooks/useOnScreen'
import cn from 'classname'
import DashboardImg from '../../../assets/Images/DashboardImg.png'
import CardekoImg from '../../../assets/Images/cardekoImg.png'
import CRUDTable from '../../../assets/Images/CRUDtable.png'
import './OtherProjects.scss'

export default function OtherProjects() {
    const ref = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);

    return (
        <div className="otherprojects">
                <div className={cn("projects-item-wrapper", { "is-reveal": onScreen })}
                    ref={ref}>
                    <div className="otherprojects-wrapper">
                        <div className="otherprojects-name1">
                            <h6>Interactive</h6>
                            <span>Dashboard</span>
                        </div>
                        <div className="otherprojects-image1">
                            <img src={DashboardImg} alt="" className="image1" data-scroll/>
                        </div>
                    </div>
                </div>
                <div className={cn("projects-item-wrapper", { "is-reveal": onScreen })}
                    ref={ref}>
                    <div className="otherprojects-wrapper">
                        <div className="otherprojects-name2">
                            <h6>Cardekho</h6>
                            <span>Clone</span>
                        </div>
                        <div className="otherprojects-image2">
                            <img src={CardekoImg} alt="" className="image2" data-scroll/>
                        </div>
                    </div>
                </div>
                <div className={cn("projects-item-wrapper", { "is-reveal": onScreen })}
                    ref={ref}>
                    <div className="otherprojects-wrapper">
                        <div className="otherprojects-name3">
                            <h6>CRUD</h6>
                            <span>Table</span>
                        </div>
                        <div className="otherprojects-image3">
                            <img src={CRUDTable} alt="" className="image3" data-scroll/>
                        </div>
                    </div>
                </div>
            </div>
    )
}
