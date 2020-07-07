import React from 'react';
import FontAwesome from 'react-fontawesome';
import './FeatureRight.css';

class FeatureRight extends React.Component {
    
    render() {


        let props = this.props.data;

        return(

            <div className="feature-right">
                <div className="sub-feature">
                    <div className="feature-img">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <img src={props.img} alt={props.alt}></img>
                        </a>
                    </div>
                    <div className="feature-txt-right">
                        <h3>Featured Project</h3>
                        <h2>{props.projectName}</h2>
                        <div className="feature-p">
                            <p>{props.description}</p>
                        </div>
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <FontAwesome className="fa fa-github"/>
                        </a>
                    </div>
                </div>
            </div>


        )
    }
}

export default FeatureRight;
