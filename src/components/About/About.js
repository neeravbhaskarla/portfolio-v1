import React, { useRef} from 'react'
import useOnScreen from '../../hooks/useOnScreen';
import cn from 'classname'
import './About.scss'

export default function About() {
    const ref = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);
    return (
        <div className="about" data-scroll-container id="about-container">
            <div className={cn("about-heading", { "is-reveal": onScreen })} data-scroll>
                <span>A B O U T</span>
            </div>
            <div className={cn("about-info", { "is-reveal": onScreen })} data-scroll>
                <span>My name is Neerav, a passionate self-taught web developer from India. </span>

                <br/>
                <br/>
                <span>I like to perform design and develop new websites. Proficient and have a solid knowledge of Data Structures & Algorithms, Object-Oriented Programming and Web application development. Having the ability to work with various programming languages, including Java, Python, HTML5, CSS3 and JavaScript and Frontend and Backend frameworks.</span>
            </div>
        </div>
    )
}
