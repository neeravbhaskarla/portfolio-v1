import React, { useRef } from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Project1 from './components/Projects/Project1/Project1'
import Project2 from './components/Projects/Project2/Project2'
import OtherProjects from './components/Projects/OtherProjects/OtherProjects'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'

import './App.scss'


export default function App() {
  const scrollToProjects = () =>{
    parallax.current.scrollTo(1)
  }
  const scrollToAbout = () =>{
    parallax.current.scrollTo(3)
  }
  const scrollToContact = () =>{
    parallax.current.scrollTo(5)
  }
  const parallax = useRef(!null)
  return (
    <div className='App'>
      <Parallax ref={parallax} pages={5} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          >
            {/* <Suspense fallback={<h1>Loading......</h1>}> */}
              <Home scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
            {/* </Suspense> */}
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={1} style={{ 
          backgroundColor: '#f8f8f8',
          height: '400vh' 
        }} />
        <ParallaxLayer
          offset={1}
          speed={1.4}
          >
            <Project1/>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={1.5}
          speed={1}
          >
            <Project2/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.5}
          speed={1}
          >
            <OtherProjects/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1}
        >
          <About/>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4.74}
          speed={1}
        >
          <Contact/>
        </ParallaxLayer>
    </Parallax>
    </div>
  )
}
