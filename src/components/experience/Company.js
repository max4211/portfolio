import React from 'react';
import './Company.css';

class Company extends React.Component {

    render() {
        return(
            <h1 className="company-name">{this.props.value}</h1>
        )
    }
}

export default Company;
