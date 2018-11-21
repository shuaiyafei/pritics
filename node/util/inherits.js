// util是node常用工具类库 提供了函数的集合
const util = require('util');

// console.log(util);

// util.inherits
// 用于实现对象间原型继承的方法 继承不能使用箭头函数

function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = () => {
        console.log(`name ${this.name}`);
    }    
}

Base.prototype.showName = () => {
    console.log(this.name);
}

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);

const s = new Sub();
const b = new Base();

console.log(b)