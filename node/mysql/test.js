const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'syf5525278.',
    database: 'node_store'
});
connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//     console.log(results);
// });

// 查询数据库
// const sql = 'SELECT * FROM websites';

// connection.query(sql, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(`
//             ------
//             ${util.inspect(result)}
//             ------
//         `);
//     }
// });

// 增加数据库
// const sql = 'INSERT INTO websites(Id, name, url, country) VALUES(0, ?, ?, ?)';
// const sqlParam = ['apple', 'www.apply.com', 'USA'];

// connection.query(sql, sqlParam, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// 修改数据库
// const sql = 'UPDATE websites set name = ?, url = ? WHERE id = ?';
// const sqlParam = ['tengx', 'www.tencent.com', 2];

// connection.query(sql, sqlParam, (err, result) => {
// if (err) {
//     console.log(err);
// } else {
//     console.log(result);
// }
// });


connection.end();