import React from 'react';
import './Resume.css';
import ResumePDF from '../../docs/resume.pdf';

class Resume extends React.Component {

    render() {
        return(
            <div className="resume-btn-div">
                <a id="resume-link" href={ResumePDF} target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        )
    }
}

export default Resume;
