import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Feature.css';

class Feature extends React.Component {

    componendDidMount() {
        if (this.props.data.align === "left") {
            console.log("found an align left for feature" + this.props.data.projectName);
            let getFeatureText = document.querySelector(".feature-txt");
            getFeatureText.style.textAlign = "left";
        }
    }
    
    render() {


        let props = this.props.data;

        return(

            <div className="feature">
                <div className="sub-feature">
                    <div className="feature-img">
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            <img src={props.img} alt={props.alt}></img>
                        </a>
                    </div>
                    <div className="feature-txt">
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

export default Feature;
