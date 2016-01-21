var dugoutControllers = angular.module('dugoutControllers', []);

dugoutControllers.controller('RaceListCtrl', ['$scope', 'Race',
  function ($scope, Race) {
    $scope.races = Race.query();
  }]);

dugoutControllers.controller('RaceDetailCtrl', ['$scope', '$routeParams', 'Race',
  function($scope, $routeParams, Race) {
    $scope.raceId = $routeParams.raceId;
    $scope.race = Race.get({
      raceId: $routeParams.raceId
    });
  }]);

dugoutControllers.controller('TeamCreationCtrl', ['$scope', '$routeParams', 'Team',
  function($scope, $routeParams, Team) {

    $scope.team = new Team("Team name", "A brand new team");
    $scope.team.setRace($routeParams.raceId)

  }]);
