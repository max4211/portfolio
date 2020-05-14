import React from 'react';
import './Timeframe.css';

class Timeframe extends React.Component {

    render() {
        return(
            <p className="timeFrame">{this.props.timeFrame}</p>
        )
    }
}

export default Timeframe;
