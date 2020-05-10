import React from 'react';
import './Navigation.css';
import { Link, animateScroll as scroll} from 'react-scroll';

class Navigation extends React.Component {

    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li class="nav-item"><Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >About</Link></li>
                        <li class="nav-item"><Link
                            to="experience"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Experience</Link></li>
                        <li class="nav-item"><Link
                            to="work"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Work</Link></li>
                        <li class="nav-item"><Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            >Contact</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navigation;
