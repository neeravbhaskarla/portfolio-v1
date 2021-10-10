import React, { useEffect, useRef } from 'react'
import Project1 from './Project1/Project1'
import Project2 from './Project2/Project2'
import OtherProjects from './OtherProjects/OtherProjects'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import './Projects.scss'

export default function Projects() {
    
    const ref = useRef(null);

    useEffect(() => {
        setTimeout(() => {
          let sections = gsap.utils.toArray(".projects-item-wrapper");
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              start: "top top",
              trigger: ref.current,
              scroller: "#main-container",
              pin: true,
              scrub: 0.5,
              snap: 1 / (sections.length - 1),
              end: () => `+=${ref.current.offsetWidth}`,
            },
          });
          ScrollTrigger.refresh();
        });
      }, []);

    return (
        <div data-scroll-container id="projects-container">
            <div className="projects" ref={ref}>
                <Project1/>
                <Project2/>
                <OtherProjects/>
            </div>
        </div>
    )
}
