import React from 'react';
import Portrait from '../img/portrait.jpg';
import FontAwesome from 'react-fontawesome';
import './default.css';
import './Card.css';

class Card extends React.Component {

    render() {
        return(
            <div class="card">
                <div class="front">
                    <img src={Portrait} alt="Max's Portrait"></img>
                </div>
                <div class="back">
                    <div class="details">
                        <h2>Max Smith
                            <br></br>
                            <span>
                                Software Engineer
                            </span>
                        </h2>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/maxaaronsmith" target="_blank" rel="noreferrer"><FontAwesome className="fa fa-facebook"/></a>
                            <a href="https://www.instagram.com/maxsmith4211/" target="_blank" rel="noreferrer"><FontAwesome className="fa fa-instagram"/></a>
                            <a href="https://www.linkedin.com/in/max-smith-40a65b14a/" target="_blank" rel="noreferrer"><FontAwesome className="fa fa-linkedin"/></a>
                            <a href="https://github.com/max4211?tab=repositories" target="_blank" rel="noreferrer"><FontAwesome className="fa fa-github"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
