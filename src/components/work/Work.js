import React from 'react';
import './Work.css';
import pokerImg from '../../img/poker.JPG';
import assemblerImg from '../../img/assembler.JPG';
import breakoutImg from '../../img/breakout.JPG';
import simulationImg from '../../img/simulation.JPG';

import Project from './Project';
import Feature from './Feature';

class Work extends React.Component {

    render() {
        let poker = {
            "projectName": "Casino Game Engine",
            "img" : pokerImg,
            "alt" : "texas holdem poker table",
            "description" : "A game engine designed to construct permutations of card games from sole configureation of XML files.",
            "github" : "https://github.com/max4211/casino-engine", 
            "align" : "right",
        }

        let assembler = {
            "projectName": "Modular Assembler",
            "img" : assemblerImg,
            "alt" : "assembler input screen",
            "description" : "A modular assembler to translate binary instructions to target base and file type.",
            "github" : "https://github.com/max4211/assembler",
            "align" : "left", 
        }

        let breakout = {
            "projectName": "Breakout Game",
            "img" : breakoutImg,
            "alt" : "breakout gameplay",
            "description" : "A JavaFX implementation of Brickbreaker.",
            "github" : "https://github.com/max4211/breakout_game", 
            "align" : "right",
        }
        
        let simulation = {
            "projectName": "Cellular Automata Simulation",
            "img" : simulationImg,
            "alt" : "simulation fire sim",
            "description" : "A JavaFX Cellular Automata simulation.",
            "github" : "https://github.com/max4211/simulation", 
            "align" : "left",
        }


        return(
            <div className="work-container" id="work" data-aos="fade-up">
                <h1>Some Things I've Built</h1>
                <div className="project-container">
                    <Feature data={poker}></Feature>
                    <Feature data={assembler}></Feature>
                    <Feature data={breakout}></Feature>
                    <Feature data={simulation}></Feature>

                </div>
            </div>
        )
    }
}

export default Work;
