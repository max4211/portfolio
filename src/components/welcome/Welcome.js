import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {

    render() {
        return(
            <div className="welcome-container" id="welcome">
                <h3 id="welcome-header">Hi, my name is</h3>
                <h1 id="bold-name">Max Smith.</h1>
                <h2 id="bold-name">I build things.</h2>

                <p id="welcome-paragraph">I am a software engineer from Potomac, MD specializing in the design and implementation of outstanding applications.</p>
            </div>
        )
    }
}

export default Welcome;
