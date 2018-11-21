//全局对象 global
//console.log(global)

//__filename 正在执行脚本文件的文件名
// console.log(__filename)

//__dirname 当前执行脚本文件的路径
// console.log(__dirname)

//setTimeout
//clearTimeout
// setTimeout(() => {
//     console.log('carry')
// }, 1000)

// let init = 0;
// for (let i = 0; i < 10000; i++) {
//     for (let j = 0; j < 10000; j++) {
//         init +=1
//     }
// }

// console.log(init)

// setInterval
// clearInterval
// setInterval(() => {
//     console.log('carry')
// }, 1000);

// process
// exit 程序退出时触发
// beforeExit 清空事件循环触发
// uncaughtException 异常冒泡回到事件循环
// Signal 当进程接收到信号时就触发

// process.on('exit', (code) => {
//     setTimeout(() => {
//         console.log(1);
//     }, 0);
//     console.log(`程序退出:${code}`);
// })
// console.log('执行完成');


