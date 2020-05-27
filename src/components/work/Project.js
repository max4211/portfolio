import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Project.css';

class Project extends React.Component {

    render() {

        let props = this.props.data;

        return(
            <div className="project">
                <div className="project-front">
                    <img src={props.img} alt={props.alt}></img>
                </div>
                <div className="project-back">
                    <div className="back-details">
                        <h3>{props.description}</h3>
                        <div className="project-links">
                            <a href={props.github} target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-github"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;
