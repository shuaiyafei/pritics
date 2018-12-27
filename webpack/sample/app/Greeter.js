var config = require('./config.json');
import './Greeter.css';

export default (function() {
    var greet = document.createElement('div');
    greet.textContent = config.greetText;
    // greet.textContent = 'fix content';
    return greet;
})();

// import React, { Component } from 'react';
// import config from './config.json';

// export default class Greeter extends Component {
//     render() {
//         return (
//             <div>
//                 1111111
//             </div>
//         )
//     }
// };

