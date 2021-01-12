const mysql = require('mysql');
const connection = mysql.createPool({
host: 'localhost',
port: 3306,
user: 'root',
password: 'mysql0616',
database: 'testuser'
});

module.exports=connection;