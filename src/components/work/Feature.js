import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Feature.css';

class Feature extends React.Component {
    
    render() {

        let props = this.props.data;

        return(

            <div className="feature">
                <div className="sub-feature">
                    <div className="feature-left">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <img src={props.img} alt={props.alt}></img>
                        </a>
                    </div>
                    <div className="feature-right">
                        <h3>Featured Project</h3>
                        <h2>{props.projectName}</h2>
                        <div className="feature-p">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

{/* <div className="project">
<div className="project-front">
    <img src={props.img} alt={props.alt}></img>
</div>
        <h3>{props.description}</h3>
        <div className="project-links">
            <a href={props.github} target="_blank" rel="noopener noreferrer"><FontAwesome className="fa fa-github"/></a>
        </div> */}

export default Feature;
