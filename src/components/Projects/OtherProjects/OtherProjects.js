import React from 'react'
import DashboardImg from '../../../assets/Images/DashboardImg.png'
import CardekoImg from '../../../assets/Images/cardekoImg.png'
import CRUDTable from '../../../assets/Images/CRUDtable.png'
import './OtherProjects.scss'

export default function OtherProjects() {
    return (
        <div className="otherprojects">
            <div className="otherprojects-heading">
                <span>O T H E R</span>
                <span>P R O J E C T S</span>
            </div>
            <div className="otherprojects-projects">
                <div className="otherprojects-projects-dashboard">
                    <img src={DashboardImg} alt="" className="dashboard-image"/>
                    <span>Interactive Dashboard</span>
                </div>
                <div className="otherprojects-projects-cardeko">
                    <img src={CardekoImg} alt="" className='cardeko-image'/>
                    <span>Cardekho Clone</span>
                </div>
                <div className="otherprojects-projects-crud">
                    <img src={CRUDTable} alt="" className='crud-image'/>
                    <span>CRUD Table</span>
                </div>
            </div>
        </div>
    )
}
