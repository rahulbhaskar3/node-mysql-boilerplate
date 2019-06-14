var util = require('util');
var dbTables = require('../config/dbTables');
var processRequest = require('../helper/queryHelper');
var jokeModel = {
    getAllJokes: function(){    
      return processRequest(dbTables.getAllJokes)
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    getJokeById: function(jokeId){        
        return processRequest(util.format(dbTables.getJokeById,jokeId))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    insertJoke: function(jokeData){
        return processRequest(util.format(dbTables.insertJoke,jokeData))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    updateJoke: function(jokeUpdateData){
        return processRequest(util.format(dbTables.updateJoke,jokeUpdateData))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    deleteJoke: function(jokeId){
        return processRequest(util.format(dbTables.deleteJoke,jokeId))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    }
};

module.exports = jokeModel;