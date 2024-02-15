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

//static assest like stylesheet, script can be added using middleware
//a middleware function (in this case express.static) is mounted by using app.use
absolutestaticPath = __dirname + '/public';
app.use('/public', express.static(absolutestaticPath));




































 module.exports = app;
