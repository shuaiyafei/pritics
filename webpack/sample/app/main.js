import greeter from './Greeter';
import './style.css';
import './Greeter.css';


console.log(greeter)
document.getElementsByTagName('body')[0].appendChild(greeter);


// import './style.css';
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Greeter from './Greeter.js';

// render(<Greeter />, document.getElementById('root'));