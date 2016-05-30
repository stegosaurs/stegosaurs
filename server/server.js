//Set up express.
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var morgan = require('morgan');


// Set up mongoose
var mongoose = require('mongoose');
mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/restaurant';
mongoose.connect(mongoURI);

// Verify mongoose connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, "There's an error"));
db.once('open', function callback(){console.log('successfully logged into mongo');  });

// Middleware
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/../client'));
app.use(bodyParser.json());
app.use(morgan('dev'));

// API endpoints
var handler = require('./handlers/handlers');

// Routes
app.get('/api/restaurant',handler.getRestaurants);

// Start server
var port = process.env.PORT || 4000;
app.listen(port);
console.log('Listening at port: ' + port);









// //exposes the id from mongodb to an API.
// app.get('/api/restaurant/:id', function(req, res){
//   Restaurant.findById(req.params.id, function(err, data){
//     res.json(data);
//   });
// });

// app.delete('/api/restaurant/:id', function(req, res){
//   Restaurant.remove({_id: req.params.id}, function(err, doc){
//     console.log(err);
//     console.log(doc);
//     Restaurant.findById(req.params.id, function(err, data){
//       res.json(data);
//     });
//   });
// });





