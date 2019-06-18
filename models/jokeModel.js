var util = require('util');
const path = require("path");
var dbTables = require(path.join(__dirname, "..", "config", "dbTables"));
var processRequest = require(path.join(__dirname, "..", "helper", "queryHelper"));
var jokeModel = {
    getJokesCount: function(){
        return processRequest(util.format(dbTables.jokes.getJokesCount))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    getAllJokes: function(offset, limit){    
      return processRequest(util.format(dbTables.jokes.getAllJokes, offset, limit))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    getJokeOfTheDay: function(randomNumber){
        return processRequest(util.format(dbTables.jokes.getJokeOfTheDay, randomNumber))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });        
    },
    searchJokes: function(searchStr){
        return processRequest(util.format(dbTables.jokes.searchJokes, searchStr))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });        
    },
    getJokeById: function(jokeId){        
        return processRequest(util.format(dbTables.jokes.getJokeById,jokeId))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    getJokesByCategory: function(categoryId){
        return processRequest(util.format(dbTables.jokes.getJokesByCategory,categoryId))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    insertJoke: function(jokeData){
        let jokeDesc = jokeData.jokeDescription;
        let jokeCat = jokeData.jokeCategory;
        return processRequest(util.format(dbTables.jokes.insertJoke,jokeDesc, jokeCat))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    updateJoke: function(jokeUpdateData, jokeId){
        let jokeDesc = jokeUpdateData.jokeDescription;
        let jokeCat = jokeUpdateData.jokeCategory;
        return processRequest(util.format(dbTables.jokes.updateJoke,jokeDesc, jokeCat, jokeId))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    },
    deleteJoke: function(jokeId){
        return processRequest(util.format(dbTables.jokes.deleteJoke,jokeId))
        .then(function(data){
            return data;
        })
        .catch(function(err){
            return err;
        });
    }
};

module.exports = jokeModel;