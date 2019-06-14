'use strict';

var mysql = require('mysql');

//local mysql db connection
var connectionPool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'DBUSERNAME',
    password : 'DBPWD',
    database : 'DBNAME'
});

// connectionPool.end(function(err) {
//     console.log('Connection ended');
//   });

module.exports = connectionPool;