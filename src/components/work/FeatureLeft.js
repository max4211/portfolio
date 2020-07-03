import React from 'react';
import FontAwesome from 'react-fontawesome';
import './FeatureLeft.css';

class FeatureLeft extends React.Component {
    
    render() {


        let props = this.props.data;

        return(

            <div className="feature-left">
                <div className="sub-feature">
                    <div className="feature-txt">
                            <h3>Featured Project</h3>
                            <h2>{props.projectName}</h2>
                            <div className="feature-p">
                                <p>{props.description}</p>
                            </div>
                        </div>
                
                    <div className="feature-img">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <img src={props.img} alt={props.alt}></img>
                        </a>
                    </div>
                </div>
            </div>


        )
    }
}

export default FeatureLeft;
