import React from 'react'
import MainPage from './components/MainPage'
import './App.scss'
import { isMobile } from 'react-device-detect'

export default function App() {
  return (
      <div className="main-page">
        {isMobile? null: <div class="cursor"></div>}
        <MainPage/>
      </div>
  )
}
