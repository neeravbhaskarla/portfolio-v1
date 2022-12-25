import React, {useEffect, useRef, useState, Suspense} from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Home from './Home/Home'
import NavBar from './Home/NavBar/NavBar'
import Projects from './Projects/Projects'
import './MainPage.scss'
import useLocoScroll from '../hooks/useLocoScroll'
import {gsap} from 'gsap'

const LoaderComponent = () =>{
  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    const timer = setTimeout(()=>{
                    if(counter!==100){
                      setCounter(counter+1)
                    }
                  },5)
    return ()=> clearTimeout(timer)
  },[counter])
  return(
    <div className="loader-component">
      <h1>{counter}</h1>
    </div>
  )
}

export default function MainPage() {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);


  useLocoScroll(!preloader);

  const loaderRef = useRef(null);
  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);
  useEffect(()=>{
    gsap.to(loaderRef.current, {
      y: window.innerHeight*1.5,
      duration: 2,
      delay: 1
    })
  }, [])

  const [timer, setTimer] = useState(2);

  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      {preloader?
        <div ref={loaderRef}>
          <LoaderComponent/>
        </div>:
        <Suspense fallback={null}>
              <div 
                id="main-container"  
                data-scroll-container
                ref={ref}>
                    <NavBar/>
                    <Home/>
                    <Projects/>
                    <About/>
                    <Contact/>
              </div>
        </Suspense>
      }
    </>
  )
}
