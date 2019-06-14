const express = require("express");

const jokeController = require("../controllers/jokesController");
const jokeRouter = express.Router({ caseSensitive: true });

jokeRouter.get("/jokes", jokeController.getAllJokes);

jokeRouter.get("/jokes/:id", jokeController.getJokeById);

jokeRouter.post("/add", jokeController.insertJoke);

jokeRouter.put("/update/:id", jokeController.insertJoke);

jokeRouter.delete("/delete/:id", jokeController.insertJoke);

module.exports = jokeRouter;
