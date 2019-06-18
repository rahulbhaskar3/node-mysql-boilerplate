const express = require("express");
const path = require("path");
const validateJokeMiddleware = require(path.join(__dirname, "..", "middlewares", "validateJokeMiddleware"));
const jokeController = require(path.join(__dirname, "..", "controllers", "jokesController"));
const jokeRouter = express.Router({ caseSensitive: true });

jokeRouter.get("/", [], jokeController.getAllJokes);

jokeRouter.get("/jokeOfTheDay", [], jokeController.getJokeOfTheDay);

jokeRouter.get("/category/:id", [validateJokeMiddleware.chkId], jokeController.getJokesByCategory);

jokeRouter.get("/search", [validateJokeMiddleware.chkSearch], jokeController.searchJokes);

jokeRouter.get("/:id", [validateJokeMiddleware.chkId], jokeController.getJokeById);

jokeRouter.post("/add", [validateJokeMiddleware.chkJokeDescription, validateJokeMiddleware.chkJokeCategory], jokeController.insertJoke);

jokeRouter.put("/update/:id", [validateJokeMiddleware.chkId, validateJokeMiddleware.chkJokeDescription, validateJokeMiddleware.chkJokeCategory],jokeController.updateJoke);

jokeRouter.delete("/delete/:id", [validateJokeMiddleware.chkId], jokeController.deleteJoke);

module.exports = jokeRouter;