var savor = angular.module('savor', ['ngRoute','ngMaterial'])

.config(function($routeProvider) {
  $routeProvider

  //route for the home page
  .when('/', {
    templateUrl: 'index.html',
    controller: 'savorCtrl'
  });
})

.controller('savorCtrl',['$scope',function savorCtrl($scope) {
  // angular.extend($scope); not needed?  
  $scope.restaurant = {
    name: 'Tasty',
    image: 'http://www.gothamgal.com/wp-content/uploads/2016/04/bigdumpling-600x600.jpg',
    username: 'peggysue',
    userPhoto: 'http://www.nextbillion.net/wp-content/uploads/JackieHyland200.jpg',
    foodRating: 5,
    serviceRating: 5,
    ambianceRating: 5,
    recommendation: 'I recommend this restaurant'
  };
}]);

// savor.factory('Restaurants' ['$http', function restaurantsFactory($http) {
//   var getRestaurants = function() {
//     return $http({
//       method: 'GET',
//       url: '/'
//     })
//     .then(function restaurantRetrieved(response) {
//       return response.data;
//     })
//     .catch(function(err) {
//       console.log('There was an error: ', err);
//     });
//   };

  // var addRestaurant = function(request) {
  //   return $http({
  //     method: 'POST',
  //     url: '/',
  //     data: request
  //   });
  // };

//   return {
//     getRestaurants: getRestaurants
//     // addRestaurant: addRestaurant
//   };
// }]);
