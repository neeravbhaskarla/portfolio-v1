import React from 'react'
import './Contact.scss'

export default function Contact() {
    return (
        <div className="contact" id="contact-container">
            <div className="contact-container">
                <div className="contact-top">
                    <div className="contact-top-links">
                        <div className="contact-top-links-items">
                            <div className="LinkedIn">
                                <a rel="noreferrer" href="https://linkedin.com/in/neeravbhaskarla" target="_blank">LinkedIn</a>
                            </div>
                            <div className="Github">
                                <a rel="noreferrer" href="https://github.com/neeravbhaskarla" target="_blank">Github</a>
                            </div>
                            <div className="Email">
                                <a rel="noreferrer" href="mailto:ananthaneerav@gmail.com" target="_blank">Email</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
