import React from 'react';
import './About.css';
import cliffsImg from '../../img/max_4.jpg';
import Skills from './Skills';

class About extends React.Component {

    render() {
        return(
            <div className="about-container" id="about"
                            data-aos="fade-up">
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>Hello! I'm Max, a software engineer from  Potomac, MD.</p>
                    <p>I recently graduated from <a className="custom-link" href="https://duke.edu/" target="_blank" rel="noopener noreferrer">Duke University</a> with a BS in Computer Science, Electrical and Computer Engineering, and minor in Economics. Since October 2022, I have been working as a Production Engineer at <a className="custom-link" href="https://www.janestreet.com/" target="_blank" rel="noopener noreferrer">Jane Street</a> in New York City!</p>
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
