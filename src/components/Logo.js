import React from 'react';
import './Logo.css';
import logoImg from '../img/logo2.png';

class Logo extends React.Component {

    render() {
        return(
            <div class="logo-container">
                <a href="index.html"><img src={logoImg} alt="Logo"></img></a>
            </div>
        )
    }
}

export default Logo;