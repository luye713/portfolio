import './About.css'
import React from 'react'
import Pdf from '../../Documents/resume.pdf'

export default function About(props) {
    return (
        <div id='about' class="section">
            <section>
                <div class="hi-wrapper">
                    
                    
                </div>
                {/* <p>Software Developer</p> */}
                <h2>About Me</h2>
                <p>
                    My background as a nutrition specialist in long-term cares and daycares provided me with skills that I leverage today as a developer. 
                    It allows me to be a responsible, trustworthy and compassionate team player that collaborates with people from different backgrounds. 
                </p>
                <p>
                    Today as a developer I apply my analytical skills, problem solving and organizational skills to build accessible, responsive and purposeful MERN stack projects. 
                </p>
                <p>
                    I am constantly seeking out new opportunities to contribute and expand my knowledge, and I look forward to joining a company where my experience will be utilized and valued.
                </p>
                <a class="button" href={Pdf} target='_blank'>Resume</a>
            </section>
        </div>
    )
}