const mysql = require('mysql');
const connection = mysql.createPool({
host: 'localhost',
port: 3306,
user: 'tripsdoa_psy',
password: 'Sodatrip12!@',
database: 'mysql'
});

//
// const connection = mysql.createPool({
//     host: 'database-3.cwakz2kcfjxd.ap-northeast-2.rds.amazonaws.com',
//     port: 3306,
//     user: 'tripsoda',
//     password: 'sodatrip2003',
//     database: 'tripsoda01'
//     });

module.exports=connection;