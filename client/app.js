// var savor = 
angular
  .module('savor', [
    'savor.toolbar',
    'auth0', 
    'angular-storage', 
    'angular-jwt',
    'ui.router',
    'ngMaterial'
  ])


.config(function($provide, authProvider, $urlRouterProvider, $stateProvider, $httpProvider, jwtInterceptorProvider) {
    
  authProvider.init({
    domain: 'savor.auth0.com',
    clientID: 'VJw1CCaxKJ4FdkqPamlBxUUrjuGapt8e'
  });

  $urlRouterProvider.otherwise('/');
  $stateProvider
  //route for the home page
  .state('home', {
    url: '/login',
    templateUrl: 'views/differentView.html',
    controller: 'savorCtrl',
  });
})

  // .directive('toolbar', toolbar)

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
    });
  }

  function addOne() {
    $http.post('/api/restaurants', $scope.restaurant).then(function(res) {
      window.location.href='#/restaurants';
    });
  }

  function update() {
    var id = $stateParams.id;
    $http.put('/api/restaurants/'+id, $scope.restaurant).then(function(res) {
      window.location.href='#/restaurants';
    });
  }

  function remove() {
    var id = $stateParams.id;
    $http.delete('/api/restaurants/' + id).success(function(response) {
      window.location.href='#/restuarants';
    });
  }

  getAll();

}]);

  // function toolbar() {
  //   return {
  //     templateUrl: '/views/components/toolbar/toolbar.tpl.html',
  //     controller: toolbarController,
  //     controllerAs: 'toolbar'
  //   };
  // }


  // function toolbarController(auth, store, $location) {
  //   var vm = this;
  //   vm.login = login;
  //   vm.logout = logout;
  //   vm.auth = auth;

  //   function login() {
  //     // The auth service has a signin method that
  //     // makes use of Auth0Lock. If authentication
  //     // is successful, the user's profile and token
  //     // are saved in local storage with the store service
  //     auth.signin({}, function(profile, token) {
  //       store.set('profile', profile);
  //       store.set('token', token);
  //       $location.path('/');
  //     }, function(error) {
  //       console.log(error);
  //     });
  //   }

  //   function logout() {
  //     // The signout method on the auth service
  //     // sets isAuthenticated to false but we
  //     // also need to remove the profile and
  //     // token from local storage
  //     auth.signout();
  //     store.remove('profile');
  //     store.remove('token');
  //     $location.path('/');
  //   }
  // }




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

