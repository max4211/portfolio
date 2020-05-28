import React from 'react';
import './Experience.css';
import RoleTab from './RoleTab';

class Experience extends React.Component {

    render() {
        return(
            <section className="experience-container" id="experience"
            data-aos="fade-up">
                <div className="experience-content">
                    <h1>Where I've Worked</h1>
                    <RoleTab/>
                </div>
            </section>
        )
    }
}

export default Experience;
