import React from 'react';
import './Loader.css';
import logoImg from '../../img/logo2.png';


class Loader extends React.Component {

    render() {
        return(
            <div className="loader-container">
                <img src={logoImg} alt="Logo" className="loader"></img>
            </div>
        )
    }
}

export default Loader;
