const events = require('events');

//引入eventEmitter对象
const eventEmitter = new events.EventEmitter();

//绑定事件及事件的处理程序
const handle1 = () => {
    console.log(1);
    eventEmitter.emit('event2');
}
const handle2 = () => {
    console.log(2);
}
eventEmitter.on('event1', handle1);
eventEmitter.on('event2', handle2);


eventEmitter.emit('event1');