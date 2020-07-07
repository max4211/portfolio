import React from 'react';
import './Work.css';
import pokerImg from '../../img/poker.JPG';
import assemblerImg from '../../img/assembler.JPG';
import breakoutImg from '../../img/breakout.JPG';
import simulationImg from '../../img/simulation.JPG';

import FeatureRight from './FeatureRight';
import FeatureLeft from './FeatureLeft';


class Work extends React.Component {

    render() {
        let poker = {
            "projectName": "Card Game Engine",
            "img" : pokerImg,
            "alt" : "texas holdem poker table",
            "description" : "A game engine designed to construct permutations of casino card games from sole configureation of XML files.",
            "github" : "https://github.com/max4211/casino-engine", 
            "align" : "right",
        }

        let assembler = {
            "projectName": "Assembler",
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
            "description" : "A JavaFX implementation of the classic Brickbreaker game with infinite levels and powerups.",
            "github" : "https://github.com/max4211/breakout_game", 
            "align" : "right",
        }
        
        let simulation = {
            "projectName": "Cellular Automata",
            "img" : simulationImg,
            "alt" : "simulation fire sim",
            "description" : "A Cellular Automata simulation with GUI composed of cell grid and transient map of population density.",
            "github" : "https://github.com/max4211/simulation", 
            "align" : "left",
        }


        return(

            <div className="work-container" id="work" data-aos="fade-up">
                <h1>Some Things I've Built</h1>
                <div className="project-container">
                    <FeatureRight data={poker}></FeatureRight>
                    <FeatureLeft data={assembler}></FeatureLeft>
                    <FeatureRight data={breakout}></FeatureRight>
                    <FeatureLeft data={simulation}></FeatureLeft>

                </div>
            </div>
        )
    }
}

export default Work;
