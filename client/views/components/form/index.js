angular
  .module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])
  .controller('FormCtrl', function($scope) {
    $scope.restaurant = {
      name: '',
      address: '',
    };
    
    $scope.price = '';
    $scope.priceCategories = [{rating:1, text: "Expensive"}, {rating: 2, text: "Affordable"}, {rating: 3, text: "Cheap!" }];
    
    $scope.service = '';
    $scope.serviceCategories = [{rating:1, text: "It was OK"}, {rating: 2, text: "Good!"}, {rating: 3, text: "Phenomenal!" }];
    
    $scope.food = '';
    $scope.foodCategories = [{rating:1, text: "Decent"}, {rating: 2, text: "Yummy!"}, {rating: 3, text: "Transcendental" }];
    
    $scope.ambience = '';
    $scope.ambienceCategories = [{rating:1, text: "Not a priority"}, {rating: 2, text: "Welcoming"}, {rating: 3, text: "Something special" }];
  });
