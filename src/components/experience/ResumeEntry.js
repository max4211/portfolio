import React from 'react';
import './ResumeEntry.css';

class ResumeEntry extends React.Component {

    render() {
        let props = this.props.props;
        let bulletItems = props.bullets.map((bullet, index) =>
            <li key={index}>{bullet}</li>
        );

        return(
            <div className="resume-entry-container">
                <h3>
                    <span>{props.position}</span>
                    <span className="highlight-company">
                        @ 
                        <a 
                            className="company-hyperlink"
                            href={props.hyperlink} 
                            target="_blank noopener noreferrer">
                                {props.name}
                        </a>
                    </span>
                </h3>
                <h4 className="dates">{props.timeframe}</h4>
                <div>
                    <ul>{bulletItems}</ul>
                </div>
            </div>
        )
    }
}

export default ResumeEntry;
