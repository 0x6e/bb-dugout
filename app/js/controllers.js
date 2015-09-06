var dugoutApp = angular.module('dugoutApp', []);

dugoutApp.controller('RaceListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('races/races.json').success(function(data) {
      $scope.races = data;
    });
}]);
