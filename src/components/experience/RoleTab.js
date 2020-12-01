import React from 'react';
import resumeData from './resume.json';
import ResumeEntry from './ResumeEntry.js';
import './RoleTab.css';

class RoleTab extends React.Component {

    render() {
        let companies = resumeData.companies;
        let apple = companies[0];
        let dukeOIT = companies[1];
        let capitalOne = companies[2];
        let domusys = companies[3];
        let franklinLab = companies[4];
        let nicolelisLab = companies[5];
        // let certify = companies[5];

        return(
            <div className="role-tabs-container">
                <ul 
                    className="role-tabs-ul" 
                    role="tablist" 
                    aria-label="Sample Tabs">
                        <button 
                            role="tab" 
                            aria-selected="true" 
                            aria-controls="panel-0" 
                            id="tab-0" 
                            tabIndex="0">
                            Apple
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-1" 
                            id="tab-1" 
                            tabIndex="-1">
                            Duke OIT
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-2" 
                            id="tab-2" 
                            tabIndex="-1">
                            Capital One
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-3" 
                            id="tab-3" 
                            tabIndex="-1">
                            Domusys
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-4" 
                            id="tab-4" 
                            tabIndex="-1">
                            Franklin Lab
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-5" 
                            id="tab-5" 
                            tabIndex="-1">
                            Nicolelis Lab
                        </button>
                </ul>
                <div 
                    className="resume-entry-div"
                    id="panel-0" 
                    role="tabpanel" 
                    tabIndex="0" 
                    aria-labelledby="tab-0"
                    >
                    <ResumeEntry props={apple} />
                </div>
                <div 
                    className="resume-entry-div"
                    id="panel-1" 
                    role="tabpanel" 
                    tabIndex="-1" 
                    aria-labelledby="tab-1"
                    hidden={true}>
                    <ResumeEntry props={dukeOIT} />
                </div>
                <div 
                    className="resume-entry-div"
                    id="panel-2" 
                    role="tabpanel" 
                    tabIndex="-1" 
                    aria-labelledby="tab-2"
                    hidden={true}>
                    <ResumeEntry props={capitalOne} />
                </div>
                <div 
                    className="resume-entry-div"
                    id="panel-3" 
                    role="tabpanel" 
                    tabIndex="-1" 
                    aria-labelledby="tab-3"
                    hidden={true}>
                    <ResumeEntry props={domusys} />
                </div>
                <div 
                    className="resume-entry-div"
                    id="panel-4" 
                    role="tabpanel" 
                    tabIndex="-1" 
                    aria-labelledby="tab-4"
                    hidden={true}>
                    <ResumeEntry props={franklinLab} />
                </div>
                <div 
                    className="resume-entry-div"
                    id="panel-5" 
                    role="tabpanel" 
                    tabIndex="-1" 
                    aria-labelledby="tab-5"
                    hidden={true}>
                    <ResumeEntry props={nicolelisLab} />
                </div>
            </div>
                )
            }
    }

export default RoleTab;
