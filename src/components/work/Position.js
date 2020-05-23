import React from 'react';
import './Position.css';

class Position extends React.Component {

    render() {
        return(
            <h1 className="position-name">{this.props.value}</h1>
        )
    }
}

export default Position;
