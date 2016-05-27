var savor = angular.module('savor', ['ngRoute']);

savor.config(function($routeProvider) {
  $routeProvider

  //route for the home page
  .when('/', {
    templateUrl: 'index.html',
    controller: 'savorCtrl'
  })
})

savor.controller('savorCtrl', ['$scope', function savorCtrl($scope) {
  $scope.restaurant = {
    name: '',
    image: '',
    username: '',
    userPhoto: '',
    foodRating: 0,
    serviceRating: 0,
    ambianceRating: 0,
    recommendation: ''
  };
}]);

savor.factory('Restaurants' ['$http', function restaurantsFactory($http) {
  var getRestaurants = function() {
    return $http({
      method: 'GET',
      url: '/'
    })
    .then(function restaurantRetrieved(response) {
      return response.data;
    })
    .catch(function(err) {
      console.log('There was an error: ', err);
    });
  };

  // var addRestaurant = function(request) {
  //   return $http({
  //     method: 'POST',
  //     url: '/',
  //     data: request
  //   });
  // };

  return {
    getRestaurants: getRestaurants
    // addRestaurant: addRestaurant
  };
}]);
