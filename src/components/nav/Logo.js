import React from 'react';
import './Logo.css';
import logoImg from '../../img/logo2.png';
// import logoImg from '../../img/logo_light.PNG';


class Logo extends React.Component {

    render() {
        return(
            <div className="logo-container">
                <a href="index.html"><img src={logoImg} alt="Logo"></img></a>
            </div>
        )
    }
}

export default Logo;