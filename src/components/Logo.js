import React from 'react';
import './Logo.css';
import logoImg from '../img/logo2.png';

class Logo extends React.Component {

    render() {
        return(
            <div class="logo-container">
                <img src={logoImg} alt="Logo"></img>
            </div>
        )
    }
}

export default Logo;