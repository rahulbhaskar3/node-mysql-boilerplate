const express = require('express');
const path = require('path');
const app = express();
var bodyParser = require("body-parser");
const helmet = require('helmet');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"))
app.listen(3050, function () {
  console.log('Example app listening on port 3050.');
});

app.get('/', function(req, res){
  res.redirect('/joke');
});

var jokeRoute = require("./routes/jokesRoute");
app.use("/joke", jokeRoute);

module.exports = app;