import React from 'react';
import './Email.css';

class Email extends React.Component {

    render() {
        return(
            <div className="full-email-div">
                <div className="email-container">
                    <a href="mailto:max.smith@duke.com" className="full-email-link">Max.Smith@Duke.edu</a>
                </div>
            </div>
        )
    }
}

export default Email;
