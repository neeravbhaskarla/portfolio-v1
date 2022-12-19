import React from 'react'
import DashboardImg from '../../../assets/Images/DashboardImg.png'
import CardekoImg from '../../../assets/Images/cardekoImg.png'
import CRUDTable from '../../../assets/Images/CRUDtable.png'
import './OtherProjects.scss'

export default function OtherProjects() {

    return (
        <div className="otherprojects">
                <div className="projects-item-wrapper">
                    <div className="otherprojects-wrapper">
                        <div className="otherprojects-name1">
                            <h6>Interactive</h6>
                            <span>Dashboard</span>
                        </div>
                        <div className="otherprojects-image1">
                            {/* <a href='https://dashboard-task01.herokuapp.com/' rel="noreferrer" target='_blank'><img src={DashboardImg} alt="" className="image1" data-scroll/></a> */}
                            <a href='dashboard-seven-nu-15.vercel.app' rel="noreferrer" target='_blank'><img src={DashboardImg} alt="" className="image1" data-scroll/></a>
                        </div>
                    </div>
                </div>
                <div className="projects-item-wrapper">
                    <div className="otherprojects-wrapper">
                        <div className="otherprojects-name2">
                            <h6>Cardekho</h6>
                            <span>Clone</span>
                        </div>
                        <div className="otherprojects-image2">
                            <a href='https://cardekho-clone.vercel.app/' rel="noreferrer" target='_blank'><img src={CardekoImg} alt="" className="image2" data-scroll/></a>
                        </div>
                    </div>
                </div>
                <div className="projects-item-wrapper">
                    <div className="otherprojects-wrapper">
                        <div className="otherprojects-name3">
                            <h6>CRUD</h6>
                            <span>Table</span>
                        </div>
                        <div className="otherprojects-image3">
                            <a href='https://crud-table-seven.vercel.app/' rel="noreferrer" target='_blank'><img src={CRUDTable} alt="" className="image3" data-scroll/></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
