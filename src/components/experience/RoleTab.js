import React from 'react';
import './RoleTab.css';

class RoleTab extends React.Component {

    render() {
        return(
            <div className="role-tabs-container">
                <ul 
                    className="role-tabs-ul" 
                    role="tablist" 
                    aria-label="Sample Tabs">
                        <button 
                            role="tab" 
                            aria-selected="true" 
                            aria-controls="panel-1" 
                            id="tab-1" 
                            tabIndex="0">
                            Capital One
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-2" 
                            id="tab-2" 
                            tabIndex="-1">
                            Domusys
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-3" 
                            id="tab-3" 
                            tabIndex="-1">
                            Franklin Lab
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-4" 
                            id="tab-4" 
                            tabIndex="-1">
                            Nicolelis Lab
                        </button>
                        <button 
                            role="tab" 
                            aria-selected="false" 
                            aria-controls="panel-5" 
                            id="tab-5" 
                            tabIndex="-1">
                            Certify
                        </button>
                </ul>
                <div 
                    id="panel-1" 
                    role="tabpanel" 
                    tabIndex="0" 
                    aria-labelledby="tab-1">
                    <p>Capital One Info</p>
                </div>
                <div 
                    id="panel-2" 
                    role="tabpanel" 
                    tabIndex="0" 
                    aria-labelledby="tab-2">
                    <p>Domusys Info</p>
                </div>
                <div 
                    id="panel-3" 
                    role="tabpanel" 
                    tabIndex="0" 
                    aria-labelledby="tab-3">
                    <p>Franklin Lab Info</p>
                </div>
                <div 
                    id="panel-4" 
                    role="tabpanel" 
                    tabIndex="0" 
                    aria-labelledby="tab-4">
                    <p>Nicolelis Lab Info</p>
                </div>
                <div 
                    id="panel-5" 
                    role="tabpanel" 
                    tabIndex="0" 
                    aria-labelledby="tab-5">
                    <p>Certify Info</p>
                </div>
            </div>
        )
    }
}

export default RoleTab;
