let express = require('express');
let app = express();

console.log("Hello World");

//- added app.METHOD(PATH, HANDLER) where method = get.
//path = / (root),
//handler is the func with req, res body

absolutePath = __dirname + '/views/index.html';
app.get('/', function(req, res) {
    res.sendFile(absolutePath);
  })




































 module.exports = app;
