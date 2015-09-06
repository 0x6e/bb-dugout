var dugoutControllers = angular.module('dugoutControllers', []);

dugoutControllers.controller('RaceListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('races/races.json').success(function(data) {
      $scope.races = data;
    });
  }]);

dugoutControllers.controller('RaceDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.raceId = $routeParams.raceId;
  }]);
