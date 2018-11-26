import './style.css';

const _ = require('lodash');

const component = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello ', 'world'], '');
    return element;
}

document.body.appendChild(component());



