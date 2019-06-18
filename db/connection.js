'use strict';

var mysql = require('mysql');

//local mysql db connection
var connectionPool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'CG@1234',
    database : 'helathEra'
});

module.exports = connectionPool;