import React from 'react';
import './Navigation.css';
import { Link } from 'react-scroll';
import Resume from '../../docs/resume.pdf';
import Logo from './Logo';
import FontAwesome from 'react-fontawesome';


class Navigation extends React.Component {

    render() {

        let toggleNavStatus = false;

        function toggleNav() {
            console.log('running toggleNav, clicked on button');
            /* Get all HTML elements we want to change styling of */
            let getSidebar = document.querySelector(".nav-main");
            let getSidebarUl = document.querySelector(".nav-main ul");
            let getSidebarLinks = document.querySelectorAll(".nav-main a");
        
            /* Check toggle nav status */
            if (toggleNavStatus === false) {
                getSidebar.style.width = "272px";
                getSidebarUl.style.visibility = "visible";
                
                for (let i = 0; i < getSidebarLinks.length; i ++) {
                    getSidebarLinks[i].style.opacity = "1";
                }
        
                toggleNavStatus = true;
            } else if (toggleNavStatus === true) {
                getSidebar.style.width = "50px";
                getSidebarUl.style.visibility = "hidden";
                
                for (let i = 0; i < getSidebarLinks.length; i ++) {
                    getSidebarLinks[i].style.opacity = "0";
                }
        
                toggleNavStatus = false;
            }
        }

        return(
            <div className="menu-sidebar">
                <header>
                    <Logo />
                    <div className="btn-toggle-nav" onClick={toggleNav}>
                        <FontAwesome className="fa fa-bars" aria-hidden="true"/></div>
                    <nav className="nav-main">
                        <ul>
                            <li className="nav-item active"><Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                >About</Link></li>
                            <li className="nav-item active"><Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={500}
                                >Experience</Link></li>
                            <li className="nav-item active"><Link
                                to="work"
                                spy={true}
                                smooth={true}
                                duration={500}
                                >Work</Link></li>
                            <li className="nav-item active"><Link
                                to="contact"
                                spy={true}
                                smooth={true}
                                duration={500}
                                >Contact</Link></li>
                            <li className="active"><a id="resume-link" href={Resume} target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navigation;