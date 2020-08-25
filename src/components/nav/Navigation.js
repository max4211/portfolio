import React from 'react';
import './Navigation.css';
import { Link } from 'react-scroll';
import ResumePDF from '../../docs/smith_resume.pdf';
import Logo from './Logo';
import Toggle from './Toggle';
import $ from 'jquery';


class Navigation extends React.Component {

    render() {

        let toggleNavStatus = false;

        function toggleHamburger() {
            $(".icon").toggleClass("close");
        }

        function selectedItem() {
            $(".icon").toggleClass("close");
            let getSidebar = document.querySelector(".nav-main");
            getSidebar.style.display = "none";
            getSidebar.style.visibility = "hidden";
            getSidebar.style.right = "-75vw";
            toggleNavStatus = false;
        }

        function toggleNav() {
            /* Get all HTML elements we want to change styling of */
            let getSidebar = document.querySelector(".nav-main");
        
            /* Check toggle nav status */
            if (toggleNavStatus === false) {
                getSidebar.style.display = "block";
                getSidebar.style.visibility = "visible";
                getSidebar.style.right = "0";
        
                toggleNavStatus = true;
            } else if (toggleNavStatus === true) {
                getSidebar.style.display = "none";
                getSidebar.style.visibility = "hidden";
                getSidebar.style.right = "-75vw";
        
                toggleNavStatus = false;
            }
        }

        return(
            <div className="menu-sidebar">
                <header>
                    <Logo />
                    <Toggle />
                    <div className="btn-toggle-nav" id="btn-wrapper" onClick={toggleNav}>
                        <div className="circle icon" onClick={toggleHamburger}>
                            <span className="line top"></span>
                            <span className="line middle"></span>
                            <span className="line bottom"></span>
                        </div>
                        </div>
                    <nav className="nav-main">
                        <ul>
                            <li className="nav-item active"><Link
                                to="about"
                                spy={true}
                                smooth={true}
                                duration={500}
                                onClick={selectedItem}
                                offset={-50}
                                >About</Link></li>
                            <li className="nav-item active"><Link
                                to="experience"
                                spy={true}
                                smooth={true}
                                duration={600}
                                onClick={selectedItem}
                                offset={-140}
                                >Experience</Link></li>
                            <li className="nav-item active"><Link
                                to="work"
                                spy={true}
                                smooth={true}
                                duration={800}
                                onClick={selectedItem}
                                offset={-100}
                                >Work</Link></li>
                            <li className="active"><a id="resume-link" href={ResumePDF} target="_blank" rel="noopener noreferrer">Resume</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navigation;