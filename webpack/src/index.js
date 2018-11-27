import _ from 'lodash';
import printMe from './print';
// import './style.css';
// import Image from './image.jpg';
// import Data from './data.xml';

const component = () => {
    // root
    const root = document.createElement('div');

    const element = document.createElement('div');
    element.innerHTML = _.join(['hello ', 'world'], '');
    element.classList.add('desc');
    root.appendChild(element);

    const btn = document.createElement('button');
    btn.innerHTML = 'click me';
    btn.onclick = printMe;
    root.appendChild(btn);
    
    return root;
}

// const component = () => {
//     // 根节点
//     const  root = document.createElement('div');

//     const element = document.createElement('div');
//     element.innerHTML = _.join(['hello ', 'world'], '');
//     element.classList.add('desc');
//     root.append(element);

//     const img = document.createElement('img');
//     img.classList.add('show');
//     img.src = Image;
//     root.appendChild(img);
    
//     const text = document.createElement('p');
//     text.innerHTML = JSON.stringify(Data);
//     root.appendChild(text);

//     return root;
// }

document.body.appendChild(component());



