import React, { Suspense, useEffect } from 'react'
import useState from 'react-usestateref'
import Model from './Model'
import './Main.scss'


const roles = ['Web Developer & UX Designer', 'Software Developer / Engineer', 'Data Analyst / Scientist']
export default function Main() {
    const [role, setRole, ref] = useState(roles[0])
    const sleep = (value) => {
        return new Promise((r) => setTimeout(r, value));
    };
    const getRandomString = () => {
        return Math.random().toString(36).substring(2);
    };
    
    useEffect(() => {
        const timer = setInterval(async () => {
        let prevRole = ref.current
        for (let i = 0; i < 15; i++) {
            setRole(getRandomString());
            await sleep(50);
        }

        setRole(roles[roles.indexOf(prevRole) + 1] || roles[0]);
        }, 3000);
        return () => clearInterval(timer);
    });

    return (
        <div className="main">
            <div className="main-container">
                <div className="main-left">
                    <div className="main-left-name">
                        <div className="main-left-name-first">
                            <span>Neerav</span>
                        </div>
                        <div className="main-left-name-last">
                            <span>Bhaskarla</span>
                        </div>
                    </div>
                    <div className="main-left-roles">
                        <span>I am a {role}</span> 
                    </div>
                </div>
                <div className="main-right">
                    <Suspense fallback={null}>
                        <Model/>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}
