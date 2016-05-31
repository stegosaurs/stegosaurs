
// Require in all of the dependencies
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
// Might need path. It's a node thing.
var path = require('path');

// Create an instance of express
var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Connect to mongo database

mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/restaurant';
mongoose.connect(mongoURI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, "There's an error"));
db.once('open', function callback(){console.log('successfully logged into mongo')});

var restSchema = new mongoose.Schema({
   name: String,
   image: String,
   username: String,
   userPhoto: String,
   foodRating: Number,
   serviceRating: Number,
   ambianceRating: Number,
   recommendation: String

 });

var Restaurant = mongoose.model("Restaurant", restSchema);

var seed = new Restaurant({
  name: "Jackie",
  image: "http://www.gothamgal.com/wp-content/uploads/2016/04/bigdumpling-600x600.jpg",
  username: "JayGURL",
  userPhoto: "http://www.nextbillion.net/wp-content/uploads/JackieHyland200.jpg",
  foodRating: "5",
  serviceRating: "5",
  ambianceRating: "5",
  recommendation: "Yes"

})
seed.save(function(err, data){
  if(err){
    console.log(err);
  }else{
    console.dir(data);
  }
});


// Add middleware. Note about express.static: this will be used in the event that we are jsut serving static file, such as a single page
// application. This assumes that routing is being handled on the client side via angular.


// Tell the server to listen to a port
var port = process.env.PORT || 4000;
app.listen(port);
console.log('Listening at port: ' + port);

// Export our app apparently for testing/flexibility.
// It was required by index.js files in a library fold in previous examples.
