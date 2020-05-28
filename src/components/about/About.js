import React from 'react';
import './About.css';
import cliffsImg from '../../img/cliffs.jpg';
import Skills from './Skills';

class About extends React.Component {

    render() {
        return(
            <div className="about-container" id="about"
                            data-aos='fade-up'>
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>Hello! I'm Max, a software engineer based in Potomac, MD.</p>
                    <p>I enjoy creating things...</p>
                    <p>I am a rising senior at <a className="custom-link" href="https://duke.edu/">Duke University</a> studying Computer Science, Electrical and Computer Engineering, and Economics. I will be working at <a className="custom-link" href="https://www.capitalone.com/">Capital One</a> this summer as a Software Engineer.</p>
                    <p>Here are some technologies I've been working with:</p>
                    <Skills />
                </div>
                <div className="cliffs-photo">
                    <img  src={cliffsImg} alt="Portrait of Max @ Cliffs of Mohrer"/>
                </div>
            </div>
        )
    }
}

export default About;
