
// Require in all of the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
// Might need path. It's a node thing.
var path = require('path');

// Create an instance of express
var app = express();

// Connect to mongo database
mongoose.connect('mongodb://localhost/<insert angular.module name here>');


// Add middleware. Note about express.static: this will be used in the event that we are jsut serving static file, such as a single page
// application. This assumes that routing is being handled on the client side via angular.
app.use(morgan('dev'));
app.use(express.static(__dirname + '/../app'));
app.use(bodyParser.json());

// Tell the server to listen to a port
app.listen(process.env.PORT || 3000, function(){
   console.log('Listening on port: 3000');
});

// Export our app apparently for testing/flexibility.
// It was required by index.js files in a library fold in previous examples.
module.exports(app);
