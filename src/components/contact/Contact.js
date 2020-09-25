import React from 'react';
import './Contact.css';
import FontAwesome from 'react-fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

class Contact extends React.Component {

    render() {
        return(
            <div className="contact-container" id="contact">
                <div className="social-icon-div" orientation="left">
                    <ul className="social-icons">
                        <li><a href="http://www.teambigeats.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faHamburger} /></a></li>
                        <li><a href="https://www.facebook.com/maxaaronsmith" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-facebook"/></a></li>
                        <li><a href="https://www.instagram.com/maxsmith4211/" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-instagram"/></a></li>
                        <li><a href="https://www.linkedin.com/in/max-smith-40a65b14a/" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-linkedin"/></a></li>
                        <li><a href="https://github.com/max4211?tab=repositories" target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-github"/></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Contact;
