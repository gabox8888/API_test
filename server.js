// Server.js

//Declare dependecies and packets
var express         = require('express');
var app             = express();
var bodyParser      = require('body-parser');
var mongoose        = require('mongoose');
var methodOverride  = require('method-override');

//Set our port
var port = process.env.PORT || 8080;

//Connect to db
mongoose.connect('mongodb://localhost/API_test');

//Configure bodyParser settings so we can receive 'POST'
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X
app.use(express.static(__dirname + '/public')); // set the static

//Set routes for API
var router = express.Router();

require('./app/routes')(app,router); // pass our application into our routes

//Start the server
app.listen(port);
console.log('We are up and running on port ' + port);
exports = module.exports = app;
