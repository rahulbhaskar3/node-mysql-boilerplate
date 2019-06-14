var jokeModel = require('../models/jokeModel');
const statusCodes = require("../config/httpConfig");

var jokesController = {
    getAllJokes: async function(req, res){
        const  getJokesData = await jokeModel.getAllJokes();
        if(getJokesData)
            return res.status(statusCodes.ok).send({"resultSet":getJokesData});
        else
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});

    },
    getJokeById: async function(req, res){
        let jokeId = req.params.id;
        const getJokeByIdData = await jokeModel.getJokeById(jokeId);
        if(getJokeByIdData)
            return res.status(statusCodes.ok).send({"resultSet": getJokeByIdData});
        else
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
    },
    insertJoke: async function(req, res){
        const insertJokeData = await jokeModel.insertJoke(req.body);
        if(insertJokeData)
            return res.status(statusCodes.ok).send({"resultSet": "Record added successfully"});
        else
            return res.status(statusCodes.internalServerErr).send({"resultSet": "There was some issue adding the records"});

    },
    updateJoke: async function(req, res){
        const updateJokeData = await jokeModel.updateJoke(req.body);
        if(updateJokeData)
            return res.status(statusCodes.ok).send({"resultSet": "Record updated successfully"});
        else
            return res.status(statusCodes.internalServerErr).send({"resultSet": "There was some issue updating the records"});

    },
    deleteJoke: async function(req, res){
        let jokeId = req.params.id;
        const deleteJokeData = await jokeModel.deleteJoke(jokeId);
        if(deleteJokeData)
            return res.status(statusCodes.ok).send({"resultSet": "Record deleted successfully"});
        else
            return res.status(statusCodes.internalServerErr).send({"resultSet": ""});
    }
};

module.exports = jokesController;