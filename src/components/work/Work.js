import React from 'react';
import './Work.css';
import pokerImg from '../../img/poker.JPG';
import assemblerImg from '../../img/assembler.JPG';
import breakoutImg from '../../img/breakout.JPG';
import simulationImg from '../../img/simulation.JPG';

import Project from './Project';

class Work extends React.Component {

    render() {
        let poker = {
            "img" : pokerImg,
            "alt" : "texas holdem poker table",
            "description" : "A game engine to build Card Games solely from data files.",
            "github" : "https://github.com/max4211/casino-engine", 
        }

        let assembler = {
            "img" : assemblerImg,
            "alt" : "assembler input screen",
            "description" : "A modular assembler to translate binary instructions to target base and file type.",
            "github" : "https://github.com/max4211/assembler", 
        }

        let breakout = {
            "img" : breakoutImg,
            "alt" : "breakout gameplay",
            "description" : "A JavaFX implementation of Brickbreaker.",
            "github" : "https://github.com/max4211/breakout_game", 
        }
        
        let simulation = {
            "img" : simulationImg,
            "alt" : "simulation fire sim",
            "description" : "A JavaFX Cellular Automata simulation.",
            "github" : "https://github.com/max4211/simulation", 
        }


        return(
            <div className="work-container" id="work" data-aos="fade-up">
                <h1>Some Things I've Built</h1>
                <div className="project-container">
                    <Project data={poker}></Project>
                    <Project data={assembler}></Project>
                    <Project data={breakout}></Project>
                    <Project data={simulation}></Project>

                </div>
            </div>
        )
    }
}

export default Work;
