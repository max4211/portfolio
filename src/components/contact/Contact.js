import React from 'react';
import './Contact.css';
import FontAwesome from 'react-fontawesome';


class Contact extends React.Component {

    render() {
        return(
            <div className="contact-container" id="contact">
                    <ul className="social-icons">
                        <li><a href="https://www.facebook.com/maxaaronsmith" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-facebook"/></a></li>
                        <li><a href="https://www.instagram.com/maxsmith4211/" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-instagram"/></a></li>
                        <li><a href="https://www.linkedin.com/in/max-smith-40a65b14a/" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-linkedin"/></a></li>
                        <li><a href="https://github.com/max4211?tab=repositories" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-github"/></a></li>
                    </ul>
            </div>
        )
    }
}

export default Contact;
