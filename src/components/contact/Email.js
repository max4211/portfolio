import React from 'react';
import './Email.css';

class Email extends React.Component {

    render() {
        return(
            <div className="full-email-div">
                <div className="email-container">
                    <a href="mailto:smithmax4211@gmail.com" className="full-email-link">smithmax4211@gmail.com</a>
                </div>
            </div>
        )
    }
}

export default Email;
