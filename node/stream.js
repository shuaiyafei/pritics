const fs = require('fs');
let data = '';

//创建可读流
const readerStream = fs.createReadStream('./readFile/file.txt');
readerStream.setEncoding('UTF8');

readerStream.on('data', (thunk) => {
    data += thunk;
});

readerStream.on('end', () => {
    console.log('文件读取完成');
    console.log(data);
    writeFile(data);
});

readerStream.on('error', (err) => {
    console.log(err.stack);
});

//写入流

const writeFile = (c) => {
    const writerStream = fs.createWriteStream('./writeFile/file.txt');

    writerStream.write(c, 'UTF8');
    writerStream.end();

    // 处理流事件 --> data, end, and error
    writerStream.on('finish', () => {
        console.log('写入完成');
    });

    writerStream.on('error', (err) => {
        console.log(err);
    });
};