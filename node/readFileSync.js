//同步文件读取 
const fs = require('fs');

//同步文件读取方法 readFileSync
let data = null;

try {
    data = fs.readFileSync('./readFile/file.txt').toString();
} catch (e) {
    console.log(e);
}

console.log(data);
console.log('文件读取完成');