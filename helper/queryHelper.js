const path = require("path");
var sql = require(path.join(__dirname, "..", "db", "connection"));

var processRequest = function(options){
    return new Promise(function (resolve, reject) { 
        sql.getConnection(function(err, conn){
            if(err){
                reject(err);
                sql.release();            
            }
            
            conn.query(options,function (error, results, fields) {            
                if (error){
                    reject(error);
                    sql.release();
                }  
                resolve(results);
            }); 
            conn.on('error',function (error) {            
                if (error) reject(error);                

            }); 
            conn.on('release', function (connection) {
                console.log('Connection %d released', connection.threadId);
            });                       
        });
    });
}

module.exports = processRequest;