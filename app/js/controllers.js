var dugoutControllers = angular.module('dugoutControllers', []);

dugoutControllers.controller('RaceListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('races/races.json').success(function(data) {
      $scope.races = data;
    });
  }]);

dugoutControllers.controller('RaceDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('races/' + $routeParams.raceId + '.json').success(function(data) {
      $scope.race = data;
    });
  }]);
