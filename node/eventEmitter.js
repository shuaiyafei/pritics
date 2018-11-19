const events = require('events');

const event = new events.EventEmitter();

event.on('event', () => {
    console.log('event 事件触发');
});

setTimeout(() => {
    event.emit('event');
}, 1000);


event.on('otherEvent', (para1, para2) => {
    console.log('first', para1, para2);
});

event.on('otherEvent', (para1, para2) => {
    console.log('second', para1, para2);
});

event.emit('otherEvent', 1, 2);

// events.EventEmitter 可以注册多个事件监听 并且可以随绑定顺序触发

// on用于绑定事件 emit用于触发事件

