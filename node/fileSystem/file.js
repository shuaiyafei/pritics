const fs = require('fs');

// 同步方法 readFileSync  异步方法 readFile
// 异步方法最后一个参数为回调 回调中第一个参数为err

// fs.readFile('file.txt', (err, res) => {
//     if (err) {
//         console.error(err)
//         return;
//     }
//     console.log(`异步 ${res.toString()}`)
// });

// const content = fs.readFileSync('file.txt');
// console.log(`同步 ${content.toString()}`);

// console.log('程序执行完成');

// fs.open('file.txt', 'r+', (err, res) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('文件打开成功');
// })

// const content = fs.openSync('file.txt', 'r+');
// console.log(content.toString());

// 获取文件信息
// fs.stat(`${__dirname}/file.txt`, (err, stats) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(stats)
// });

fs.readFile('file.txt', (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    const content = res.toString();
    fs.writeFile('file.md', `**${content}**`, (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('文件写入成功');
    });
})

