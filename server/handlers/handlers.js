var restaurantController = require('./../db/controllers');

module.exports = {
  getRestaurants:  function(req,res) {
      restaurantController.fetchRestaurants(function(data) {
        res.status(200).send(data);
      });
    },
};