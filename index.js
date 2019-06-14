const express = require('express');
const fs = require('fs');
const app = express();
var sql = require('./db/connection.js');

app.listen(3050, function () {
  console.log('Example app listening on port 3050.');
});

var jokeRoute = require("./routes/jokesRoute");
app.use("/joke", jokeRoute);

module.exports = app;