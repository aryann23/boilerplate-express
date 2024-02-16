require('dotenv').config();
let bodyParser = require('body-parser');
let express = require('express');
let app = express();

//logging root level middleware here
app.use((req, res, next) => {
  let string = `${req.method} ${req.path} - ${req.ip}`;
  console.log(string);
  next();
});

//POST is the default method used to send client data with HTML forms. 
//In REST convention, POST is used to send data to create new items in the database
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

//creating simple api to send JSON - js obj notation
//When a node application is run, it can check the value of the environment variable and do different things based on the value. 
//NODE_ENV specifically is used (by convention) to state whether a particular environment is a production or a development environment.
process.env.MESSAGE_STYLE='uppercase';
app.get('/json', function(req, res) {
    if(process.env.MESSAGE_STYLE==='uppercase'){
        res.json({"message": "HELLO JSON"});
    }
    else{
        res.json({"message": "Hello json"});
    }
    
  });

  app.get('/now', function(req, res, next){
    req.time = new Date().toString();
    next();
  }, function(req, res){
    res.json({"time": req.time});
  });

//adding route parameter
app.get('/:word/echo', function(req, res){
    res.json({'echo': req.params.word})
});

//adding query parameter input. Express can parse the data from the query string, and populate the object req.query
//use route to work on both get and post. The query string is delimited by a question mark (?), and includes field=value couples. 
app.route('/name').get(function(req, res){
  let first = req.query.first;
  let last = req.query.last;

  let jasonObj = {name: `${first} ${last}`};
  res.send(jasonObj);
}).post();


































 module.exports = app;
