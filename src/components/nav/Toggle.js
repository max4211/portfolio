import React from 'react';
import './Toggle.css';
import $ from 'jquery';
// import Lightmode from '../../default/red.css';
// import Darkmode from '../../default/blue.css';


class Toggle extends React.Component {


    render() {

    let darkMode = true;

    function selected() {
        console.log("entering selected function, darkMode=" + darkMode);
        darkMode = !darkMode;
        if (darkMode) {
            $('head').append('<link rel="stylesheet" type="text/css" href="dark.css">');
        } else {
            $('head').append('<link rel="stylesheet" type="text/css" href="light.css">');
        }

    }

        return(
            <div className="toggle-center">
                <input type="checkbox" onChange={selected}>

                </input>
            </div>
        )
    }
}

export default Toggle;
