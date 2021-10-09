import React, { useRef } from 'react'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import Project1 from './Projects/Project1/Project1'
import Project2 from './Projects/Project2/Project2'
import OtherProjects from './Projects/OtherProjects/OtherProjects'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'



export default function MainPage() {
  const scrollToProjects = () =>{
    parallax.current.scrollTo(1)
  }
  const scrollToAbout = () =>{
    parallax.current.scrollTo(3.2)
  }
  const scrollToContact = () =>{
    parallax.current.scrollTo(5)
  }
  const parallax = useRef(!null)
  return (
      <Parallax ref={parallax} pages={5} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          >
            <Home scrollToProjects={scrollToProjects} scrollToAbout={scrollToAbout} scrollToContact={scrollToContact}/>
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
  )
}
