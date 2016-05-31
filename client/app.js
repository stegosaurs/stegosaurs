var savor = angular.module('savor', ['ngRoute','ngMaterial'])

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

.controller('savorCtrl',['$scope', '$http', '$location', '$stateParams', function savorCtrl($scope, $http, $location, $stateParams) {
  // angular.extend($scope); not needed?  
  //$scope.restaurants = [];

  function getAll() {
    $http.get('/api/restaurants').then(function(res) {
      $scope.restaurants = res.data;
    });
  }

  function getOne() {
    var id = $stateParams.id;
    console.log(id);
    $http.get('/api/restaurants/'+id).then(function(res) {
      $scope.restaurant = res.data;
    })
  }

  function addOne() {
    $http.post('/api/restaurants', $scope.restaurant).then(function(res) {
      window.location.href='#/restaurants'
    })
  };

  function update() {
    var id = $stateParams.id;
    $http.put('/api/restaurants/'+id, $scope.restaurant).then(function(res) {
      window.location.href='#/restaurants';
    })
  };

  function remove() {
    var id = $stateParams.id;
    $http.delete('/api/restaurants/' + id).success(function(response) {
      window.location.href='#/restuarants';
    })
  }

  getAll();

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
