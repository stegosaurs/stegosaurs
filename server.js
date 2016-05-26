
// Require in all of the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');


// Create an instance of express
var app = express();

// Connect to mongo database
mongoose.connect('mongodb://localhost/restaurant');


// Add middleware. Note about express.static: this will be used in the event that we are jsut serving static file, such as a single page
// application. This assumes that routing is being handled on the client side via angular.
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Tell the server to listen to a port
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening at port: ' + port);

// Export our app apparently for testing/flexibility.
// It was required by index.js files in a library fold in previous examples.
module.exports(app);
