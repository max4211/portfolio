import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {

    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li><a class="nav-link" href="/#about">About</a></li>
                        <li><a class="nav-link" href="/#experience">Experience</a></li>
                        <li><a class="nav-link" href="/#work">Work</a></li>
                        <li><a class="nav-link" href="/#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navigation;
