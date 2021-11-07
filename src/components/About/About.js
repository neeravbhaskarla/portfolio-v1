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
                <span>My name is Neerav, a passionate self-taught web developer and a freelance software engineer from India. </span>

                <br/>
                <br/>
                <span>I like to perform design and develop new websites. Proficient in Java, C#, Python, Javascript, SQL, React. Recently graduated in 2021 and currently looking for a job.</span>
            </div>
        </div>
    )
}
