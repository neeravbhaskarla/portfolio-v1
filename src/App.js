import React from 'react'
import MainPage from './components/MainPage'
import {isMobile} from 'react-device-detect'
import './App.scss'
import Model from './components/Home/Main/Model'

const UnderConstruction = (()=>{
  return(
    <div className="construction">
      <div className="construction-logo">
        <Model/>
      </div>
      <div className="construction-title">
        <span>Mobile Version <br/> is Under Construction</span>
      </div>
      <div className="construction-detail">
        <span>Coming Soon....</span>
      </div>
    </div>
  )
})
export default function App() {
  return (
    <div>
      {isMobile?<UnderConstruction/>:<MainPage/>}
    </div>
  )
}
