const express = require('express');
const fs = require('fs');
const util = require('util');

const app = express();

// http://127.0.0.1:8990/listUsers
// 列表
app.get('/listUsers', (req, res) => {
    fs.readFile(`${__dirname}/model/data.json`, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('文件读取成功');
            res.end(data);
        }
    })
});

// http://127.0.0.1:8990/addUsers
// 添加
app.get('/addUsers', (req, res) => {
    fs.readFile(`${__dirname}/model/data.json`, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let content = JSON.parse(data);
            serial = Object.values(content)[Object.values(content).length - 1].id + 1;
            const user = {
                ["user" + serial]: {
                    "name": "suresh",
                    "password": "password",
                    "profession": "librarian",
                    "id": serial
                }
            }
            content = JSON.stringify(Object.assign(content, user));
            fs.writeFile(`${__dirname}/model/data.json`, content, (err) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log('增加成功')
                    res.end(content);
                }
            });
        }
    })
});

// http://127.0.0.1:8990/detailUsers?id=7
// 详情
app.get('/detailUsers', (req, res) => {
    const id= req.query.id;
    fs.readFile(`${__dirname}/model/data.json`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let content = JSON.parse(data);
            const detailInfo = content[`user${id}`];
            res.end(JSON.stringify(detailInfo));
        }
    })
});

// 删除
app.get('/deleteUsers', (req, res) => {
    const id = req.query.id;
    fs.readFile(`${__dirname}/model/data.json`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            let content = JSON.parse(data);
            let isHasId = false;
            Object.values(content).forEach(item => {
                if (item.id == id) {
                    isHasId = true;
                }
            });
            console.log(isHasId)
            if (isHasId) {
                delete content[`user${id}`];
                fs.writeFile(`${__dirname}/model/data.json`, JSON.stringify(content), (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('增加成功');
                    }
                })
            } else {
                content = '无效的id';
            }
            res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(JSON.stringify(content));
        }
    })
});

app.listen(8990, () => {
    console.log('监听 http://127.0.0.1:8990');
});