var savor = angular.module('savor', ['ui.router','ngMaterial'])

.config(function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
  //route for the home page
  .state('home', {
    url: '/',
    templateUrl: 'views/differentView.html',
    controller: 'savorCtrl'
  });
})

.controller('savorCtrl',['$scope', '$http', function savorCtrl($scope,$http) {
  // angular.extend($scope); not needed?  
  $scope.restaurants = [];
  
  function getContacts() {
    $http({
      method: 'GET',
      url: '/api/restaurant'
    }).then(function(res) {
      $scope.restaurants = res.data;
    });
  }
  

  getContacts();

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








  // {
  //   name: 'Tasty',
  //   image: 'http://www.gothamgal.com/wp-content/uploads/2016/04/bigdumpling-600x600.jpg',
  //   username: 'peggysue',
  //   userPhoto: 'http://www.nextbillion.net/wp-content/uploads/JackieHyland200.jpg',
  //   foodRating: 5,
  //   serviceRating: 5,
  //   ambianceRating: 5,
  //   recommendation: 'I recommend this restaurant'
  // },
  // {
  //   name: 'Test2',
  //   image: 'http://i.telegraph.co.uk/multimedia/archive/03262/burgerss_3262533b.jpg',
  //   username: 'Johnny Five',
  //   userPhoto: 'http://vignette3.wikia.nocookie.net/robotsupremacy/images/7/7f/Johnny5-2.jpg/revision/latest?cb=20120321192157',
  //   foodRating: 5,
  //   serviceRating: 5,
  //   ambianceRating: 5,
  //   recommendation: 'Johnny Five likes!'
  // }
