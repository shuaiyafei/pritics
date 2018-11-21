const util = require('util');

// 判断是否为数组
console.log('util.isArray');
console.log(`[]: ${util.isArray([])}`);
console.log(`{}: ${util.isArray({})}\n`);

// 判断是否为正则
console.log('util.isRegExp');
console.log(`/some reg/: ${util.isRegExp(/some Reg/)}`);
console.log(`{}: ${util.isRegExp({})}\n`);

// 判断是否为日期返回的参数
console.log('util.isDate');
console.log(`new Date: ${util.isDate(new Date())}`)
console.log(`{}: ${util.isDate({})}\n`);

// 判断是否为一个错误对象
console.log('util.isError');
console.log(`new Error: ${util.isError(new Error())}`);
console.log(`{}: ${util.isError({})}`);


