import React from 'react';
import './default.css';
import './About.css';

class About extends React.Component {

    render() {
        return(
            <div class="container" id="about">
                <h3 id="welcome-header">Hi, my name is</h3>
                <h1 id="bold-name">Max Smith.</h1>
                <p id="about-me-paragraph">I am a software engineer from Potomac, MD specializing in the design and implementation of outstanding applications.</p>
            </div>
        )
    }
}

export default About;
