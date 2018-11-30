import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    const root = document.createElement('div');
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    root.appendChild(element);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click';
    btn.onclick = printMe;
    root.appendChild(btn);
    
    return root;
}

// document.body.appendChild(component());

let element = component();
document.body.appendChild(element);

console.log(module.hot)

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element);
    })
}

