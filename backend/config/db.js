let mysql = require('mysql2');

let connection  = mysql.createConnection({
    host:'localhost',
    user:'joseph',
    password:'3057',
    database:'BLOG'
});


module.exports = connection;