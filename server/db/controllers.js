var Restaurant = require('./models');

module.exports = {
  fetchRestaurants: function(callback) {
    Restaurant.find(function(err,data) {
      if(err) {
        console.error(err);
      } else {
        callback(data);
      }
    });
  }
};