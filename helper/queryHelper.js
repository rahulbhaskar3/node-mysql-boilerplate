const path = require("path");
var sql = require(path.join(__dirname, "..", "db", "connection"));

var processRequest = function(options){
    return new Promise(function (resolve, reject) { 
        sql.getConnection(function(err, conn){
            if(err){
                conn.release();  
                reject(err);                          
            }
            
            conn.query(options,function (error, results, fields) {            
                if (error){
                    conn.release();  
                    reject(error);    
                }  
                conn.release();  
                resolve(results);
            });                       
        });
    });
}

module.exports = processRequest;