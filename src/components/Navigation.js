import React from 'react';
import './Navigation.css';
import { Link } from 'react-scroll';
import Resume from '../docs/resume.pdf';

class Navigation extends React.Component {

    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li className="nav-item"><Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >About</Link></li>
                        <li className="nav-item"><Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Experience</Link></li>
                        <li className="nav-item"><Link
                            to="work"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Work</Link></li>
                        <li className="nav-item"><Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Contact</Link></li>
                        <li><a id="resume-link" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navigation;