//异步读取文件
const fs = require('fs');

//异步读取方法
fs.readFile('./readFile/file.txt', (err, data) => {
    if (err) {
        console.error(err);
        return false;
    }
    console.log(data.toString());
});

console.log('文件读取完成');