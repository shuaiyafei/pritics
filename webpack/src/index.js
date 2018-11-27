import './style.css';

const _ = require('lodash');

const component = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello ', 'world'], '');
    element.classList.add('desc');
    return element;
}

document.body.appendChild(component());



