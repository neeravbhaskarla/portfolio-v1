import React from 'react'
import './Contact.scss'

export default function Contact() {
    return (
        <div className="contact" id="contact-container">
            <div className="contact-container">
                <div className="contact-top">
                    <div className="contact-top-links">
                        <div className="contact-top-links-left">
                            <div className="LinkedIn">
                                <a rel="noreferrer" href="https://linkedin.com/in/neeravbhaskarla" target="_blank">LinkedIn</a>
                            </div>
                            <div className="Github">
                                <a rel="noreferrer" href="https://github.com/neeravbhaskarla" target="_blank">Github</a>
                            </div>
                        </div>
                        <div className="contact-top-links-right">
                            <div className="contact-mail">
                                <span>Contact Me</span>
                            </div>
                            <div className="contact-mailId">
                                <a href="mailto:ananthaneerav@gmail.com">ananthaneerav@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-bottom">
                    <div className="copyright">
                        <span>2021 @ Neerav Bhaskarla</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
